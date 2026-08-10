create table if not exists public.site_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (key, value)
values (
  'resume_url',
  'https://drive.google.com/file/d/1wIniqDimrqYNiFFfpc5tNNQNyCVt-SNe/view?usp=sharing'
)
on conflict (key) do nothing;

alter table public.site_settings enable row level security;

grant select on public.site_settings to anon, authenticated;
grant update (value, updated_at) on public.site_settings to authenticated;

drop policy if exists "Anyone can read site settings" on public.site_settings;
create policy "Anyone can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

drop policy if exists "Admin can update resume URL" on public.site_settings;
create policy "Admin can update resume URL"
on public.site_settings
for update
to authenticated
using (
  key = 'resume_url'
  and lower(auth.jwt() ->> 'email') = lower('jasonjahja@gmail.com')
)
with check (
  key = 'resume_url'
  and lower(auth.jwt() ->> 'email') = lower('jasonjahja@gmail.com')
);
