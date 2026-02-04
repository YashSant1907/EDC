/*
  # EDC UIET Database Schema

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text) - President, Vice President, Secretary, Department Lead, Faculty Incharge
      - `department` (text) - Logistics, PR and Marketing, etc.
      - `image_url` (text)
      - `bio` (text)
      - `linkedin_url` (text, optional)
      - `email` (text, optional)
      - `order_index` (integer) - for sorting
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `event_date` (timestamptz)
      - `is_upcoming` (boolean)
      - `is_highlighted` (boolean)
      - `poster_url` (text)
      - `images` (jsonb) - array of image URLs for past events
      - `registration_link` (text, optional)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin users to manage data
*/

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  department text,
  image_url text NOT NULL,
  bio text,
  linkedin_url text,
  email text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date text,
  is_upcoming boolean DEFAULT true,
  is_highlighted boolean DEFAULT false,
  poster_url text,
  images jsonb,
  registration_link text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view team members"
  ON team_members
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert team members"
  ON team_members
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON team_members
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);