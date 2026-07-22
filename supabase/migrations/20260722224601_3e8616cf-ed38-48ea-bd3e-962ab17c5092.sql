
ALTER TABLE public.commission_enquiries
  ADD CONSTRAINT enquiry_category_len CHECK (char_length(category) <= 80),
  ADD CONSTRAINT enquiry_name_len CHECK (char_length(name) BETWEEN 1 AND 120),
  ADD CONSTRAINT enquiry_org_len CHECK (organization IS NULL OR char_length(organization) <= 160),
  ADD CONSTRAINT enquiry_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT enquiry_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT enquiry_project_len CHECK (char_length(project) BETWEEN 1 AND 2000),
  ADD CONSTRAINT enquiry_dates_len CHECK (dates IS NULL OR char_length(dates) <= 200),
  ADD CONSTRAINT enquiry_location_len CHECK (location IS NULL OR char_length(location) <= 200),
  ADD CONSTRAINT enquiry_coverage_len CHECK (coverage IS NULL OR char_length(coverage) <= 400),
  ADD CONSTRAINT enquiry_image_use_len CHECK (image_use IS NULL OR char_length(image_use) <= 400),
  ADD CONSTRAINT enquiry_deadline_len CHECK (deadline IS NULL OR char_length(deadline) <= 200),
  ADD CONSTRAINT enquiry_budget_len CHECK (budget IS NULL OR char_length(budget) <= 200),
  ADD CONSTRAINT enquiry_context_len CHECK (context IS NULL OR char_length(context) <= 4000);
