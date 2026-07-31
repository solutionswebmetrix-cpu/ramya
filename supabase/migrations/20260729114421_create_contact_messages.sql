/*
# Create contact_messages table (single-tenant, no auth)

## Purpose
Stores messages submitted through the portfolio contact form. The portfolio is
a public marketing site with no sign-in screen, so submissions come from
anonymous visitors and must be allowed for the `anon` role.

## 1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — admin flag for whether the message has been read
  - `created_at` (timestamptz, default now()) — submission timestamp

## 2. Security
- Row Level Security is ENABLED on `contact_messages`.
- INSERT is allowed for `anon, authenticated` so public visitors can submit the
  contact form without signing in. The WITH CHECK validates that name, email and
  message are non-empty.
- SELECT / UPDATE / DELETE are restricted to `authenticated` only (site owner /
  admin) so submitted messages are not publicly readable. The anon-key frontend
  only inserts; it never reads this table.

## 3. Important Notes
- No `user_id` column or `auth.users` reference: this is single-tenant public
  data with no ownership concept.
- The table is safe to re-run: uses `IF NOT EXISTS` and drops policies before
  recreating them.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_message" ON contact_messages;
CREATE POLICY "anon_insert_contact_message"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(trim(name)) > 0
  AND char_length(trim(email)) > 0
  AND char_length(trim(message)) > 0);

DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);
