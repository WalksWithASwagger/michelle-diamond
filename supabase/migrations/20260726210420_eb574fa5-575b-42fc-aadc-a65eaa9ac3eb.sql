-- 1. Private schema (not exposed to the Data API)
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM anon, authenticated, public;
GRANT USAGE ON SCHEMA private TO authenticated, anon;

-- Internal SECURITY DEFINER role check, out of the exposed API schema
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM public;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO anon, authenticated;

-- 2. Repoint all policies at the private helper
DROP POLICY "Admins manage roles" ON public.user_roles;
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated
  USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins delete gallery images" ON public.gallery_images;
CREATE POLICY "Admins delete gallery images" ON public.gallery_images FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins insert gallery images" ON public.gallery_images;
CREATE POLICY "Admins insert gallery images" ON public.gallery_images FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins update gallery images" ON public.gallery_images;
CREATE POLICY "Admins update gallery images" ON public.gallery_images FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Anyone can view published gallery images" ON public.gallery_images;
CREATE POLICY "Anyone can view published gallery images" ON public.gallery_images FOR SELECT TO anon, authenticated
  USING ((published = true) OR private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins delete enquiries" ON public.commission_enquiries;
CREATE POLICY "Admins delete enquiries" ON public.commission_enquiries FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins update enquiries" ON public.commission_enquiries;
CREATE POLICY "Admins update enquiries" ON public.commission_enquiries FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP POLICY "Admins view enquiries" ON public.commission_enquiries;
CREATE POLICY "Admins view enquiries" ON public.commission_enquiries FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

-- 3. Replace permissive WITH CHECK (true) on the public enquiry insert
DROP POLICY "Anyone can submit an enquiry" ON public.commission_enquiries;
CREATE POLICY "Anyone can submit an enquiry" ON public.commission_enquiries FOR INSERT TO anon, authenticated
  WITH CHECK (
    status = 'new'
    AND length(btrim(name)) BETWEEN 1 AND 120
    AND length(btrim(email)) BETWEEN 3 AND 255
    AND email LIKE '%_@_%'
    AND length(btrim(category)) BETWEEN 1 AND 120
    AND length(btrim(project)) BETWEEN 1 AND 2000
    AND coalesce(length(organization), 0) <= 160
    AND coalesce(length(phone), 0) <= 40
    AND coalesce(length(dates), 0) <= 200
    AND coalesce(length(location), 0) <= 200
    AND coalesce(length(coverage), 0) <= 400
    AND coalesce(length(image_use), 0) <= 400
    AND coalesce(length(deadline), 0) <= 200
    AND coalesce(length(budget), 0) <= 200
    AND coalesce(length(context), 0) <= 4000
  );

-- 4. Public API helper is now SECURITY INVOKER (own-role checks only, via RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;