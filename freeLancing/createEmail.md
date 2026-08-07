# Platforms
- Zoho Mail (Free basic)
- Google Workspace (Paid)
- Microsoft 365 (Paid)

# Step 1: Create your email address
Suppose you choose Zoho Mail.
During setup, you'll create: 

```
contact@orange.com 
```

or 
```
info@orange.com
```

These are called mailboxes.

# Step 2 : Verify the domain
Now Zoho asks:

"How do we know you really own orange.com?"

You prove ownership by adding a DNS record.
This is why you need access to the domain registrar.

Namecheap
      │
      ▼
DNS
      │
TXT Record

Once that record is added, Zoho verifies that you own the domain.

# Configure Email DNS Records
Next, Zoho gives you DNS records like these:

```
MX Record
TXT Record
SPF Record
DKIM Record
```
You add them to your domain's DNS settings.

You don't need to memorize them yet—Zoho or Google Workspace tells you exactly what values to add.

# Done!
Now this works:

blue@orange.com

You can:
- Send emails
- Receive emails
- Log in to your mailbox

# Can I create multiple email addresses?
Yes.

Suppose you own orange.com

You can create:
info@orange.com
contact@orange.com
support@orange.com
admin@orange.com
hello@orange.com
careers@orange.com

Each one can be its own mailbox, depending on your email provider and plan.

# So do I need to buy the email?
It depends on the provider.

## Option 1 — Zoho Mail

Basic plan is free for many small businesses.

You pay:

Domain ✔️
Email ❌ (free basic plan)

## Option 2 — Google Workspace

You pay for:
Domain ✔️
Email ✔️

Google charges a monthly fee per user.

Example:

1 mailbox

blue@orange.com

If you later create:

support@orange.com

that's another mailbox (and another paid user on most Google Workspace plans).


```
1. Client buys domain
        │
        ▼
   orange.com
        │
        ▼
2. Choose email provider
        │
        ├── Zoho Mail (Free basic)
        ├── Google Workspace (Paid)
        └── Microsoft 365 (Paid)
        │
        ▼
3. Verify domain ownership
        │
        ▼
4. Add DNS records (MX, SPF, DKIM, etc.)
        │
        ▼
5. Create mailbox
        │
        ▼
   info@orange.com
        │
        ▼
6. Send & receive business emails
```

# Which email service — Zoho Mail (free) is my pick here
Zoho Mail's Forever Free plan: up to 5 mailboxes, 5GB each, on one domain, genuinely free with no trial expiry. For one consultant or a small team, that covers it. 

Google Workspace :Google Workspace works the same way underneath, and has the more familiar Gmail look, but it's a paid seat from day one — roughly ₹270+/month per mailbox — 
so free Zoho makes more sense as the starting point unless the client specifically wants Gmail's interface.

One limitation worth knowing upfront: the free plan is webmail/app only — no plugging it into Outlook or the phone's native Mail app. You'd check mail at 
mail.zoho.com or the Zoho Mail app. If that gets annoying later, upgrading unlocks it for about $1/mailbox/month.

# create a zoho mails
Setting up blue@orange.com, step by step

Step 1 — Create the Zoho Mail account
Go to zoho.com/mail → Forever Free plan. Same ownership rule as the domain: create this under the client's details, not yours.

Step 2 — Add the domain
It'll ask if you're adding a new or existing domain — choose "existing domain" (since orange.com is already bought) and type it in exactly.

Step 3 — Prove you own it (domain verification)
Zoho gives you a value to paste in as a TXT record — a small line of text you add wherever orange.com's DNS is managed (the registrar you bought it from — Namecheap, GoDaddy, Cloudflare, whichever). Add it, go back to Zoho, click Verify. Takes anywhere from a few minutes to about an hour — not instant, don't panic.

Step 4 — Create the actual mailbox
Once verified, Zoho lets you create the first user — this is the step where you literally type blue and it becomes blue@orange.com. Set a password (or let the client set their own).

Step 5 — Add the MX records
Verification just proves ownership — it doesn't route mail yet. Zoho gives you 2-3 more values called MX records, which tell the internet "mail for orange.com goes to Zoho's servers." Same DNS panel, paste these in. This is the step that actually makes mail arrive.

Step 6 — SPF and DKIM (quick, don't skip)
Zoho will also offer these two — they stop blue@orange.com's mail from landing in spam, and stop anyone else from sending fake emails that look like they're from your domain. Same copy-paste-into-DNS process.

Once 3 and 5 have had a little time to take effect, blue@orange.com is a live inbox. Adding more mailboxes later (up to 5 free) is just repeating Step 4 — no need to touch DNS again.

One gotcha: if this domain ever had any email service on it before (unlikely for a brand-new domain), delete the old MX records first — two providers' MX records fighting each other is a common reason mail silently stops arriving.
