
CREATE TABLE public.commission_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  category text NOT NULL,
  name text NOT NULL,
  organization text,
  email text NOT NULL,
  phone text,
  project text NOT NULL,
  dates text,
  location text,
  coverage text,
  image_use text,
  deadline text,
  budget text,
  context text,
  status text NOT NULL DEFAULT 'new'
);

GRANT INSERT ON public.commission_enquiries TO anon, authenticated;
GRANT ALL ON public.commission_enquiries TO service_role;

ALTER TABLE public.commission_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.commission_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
