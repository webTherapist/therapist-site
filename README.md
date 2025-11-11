# Therapist Website (EN/RU/UK) – Next.js + Decap CMS

**Default language:** RU  
**Hosting target:** Netlify (Identity + Git Gateway)

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000/ru
```

## Deploy to Netlify
1. Push this repo to GitHub (e.g., webTherapist/therapist-site).
2. Netlify → New site from Git → pick repo.
   - Build command: `npm run build`
   - Publish directory: (auto-detected) or `.next` if required
3. Enable Identity (Invite-only) + Git Gateway.
4. Invite your email, then log in at `/admin`.

## Admin
- Decap CMS lives at `/admin`.
- Pages and Blog are fully editable with SEO fields and images.
