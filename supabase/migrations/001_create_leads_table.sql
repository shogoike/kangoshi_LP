-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  department VARCHAR(50) NOT NULL,
  work_style VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
