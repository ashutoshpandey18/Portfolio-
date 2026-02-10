# Contact & Meeting Section Setup

## Your Professional Contact & Meeting section is ready!

### Setup Steps

#### 1. Get Web3Forms Access Key
- Go to [web3forms.com](https://web3forms.com)
- Sign up and verify your email
- Get your access key from the dashboard

#### 2. Configure Email Recipient
In your Web3Forms dashboard:
- Set recipient email to: `ashutoshpandey23june2005@gmail.com`
- Enable email notifications

#### 3. Update Access Key in Code
Open: `components/ContactMeeting.tsx`

Replace line 31:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

With your actual key:
```typescript
access_key: 'your-actual-web3forms-key-here',
```

#### 4. Setup Calendly (Optional)
If you want meeting booking:
- Create account at [calendly.com](https://calendly.com)
- Set up your availability
- Get your Calendly link

Open: `components/ContactMeeting.tsx`

Replace line 214:
```typescript
src="https://calendly.com/YOUR_CALENDLY_USERNAME/30min"
```

With your actual Calendly URL:
```typescript
src="https://calendly.com/your-username/30min"
```

### Features Included

✅ Professional YC-style card design
✅ Animated border with blue glow
✅ Contact form with validation
✅ Web3Forms API integration
✅ Loading states
✅ Success/error messages
✅ Calendly meeting embed
✅ Responsive layout (mobile-friendly)
✅ Floating label animations
✅ Button hover effects

### Form Fields
- Name (required)
- Email (required)
- Company (optional)
- Message (required)

### Testing
1. Fill out the form
2. Submit
3. Check your email (ashutoshpandey23june2005@gmail.com)
4. You should receive the contact message

### Support
If you need help:
- Web3Forms docs: https://docs.web3forms.com
- Calendly help: https://help.calendly.com

Done! Your contact section is live and ready to receive messages.
