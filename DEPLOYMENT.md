# Vercel Deployment Guide for ProductZone

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Your code pushed to a GitHub repository

## Step 1: Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit - ProductZone app"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. **IMPORTANT:** Add Environment Variables:
   - Click "Environment Variables"
   - Add each variable from your `.env.local` file:
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
     - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
     - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `NEXT_PUBLIC_FIREBASE_APP_ID`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 3: Configure Firebase for Production

After deployment, you'll get a Vercel URL (e.g., `productzone.vercel.app`)

1. Go to Firebase Console (https://console.firebase.google.com)
2. Select your project: `productzone-b5c85`
3. Go to Authentication > Settings > Authorized domains
4. Add your Vercel domain: `your-app.vercel.app`
5. Also add any custom domains you plan to use

## Step 4: Environment Variables in Vercel

To add/update environment variables after deployment:

1. Go to your project in Vercel Dashboard
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add or update variables
5. Redeploy for changes to take effect

## Important Notes

- `.env.local` is NOT committed to Git (it's in .gitignore)
- You MUST add environment variables manually in Vercel Dashboard
- All Firebase keys use `NEXT_PUBLIC_` prefix for client-side access
- After adding env variables, trigger a new deployment

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get their own preview URLs

## Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update Firebase authorized domains

## Troubleshooting

### Firebase Auth Not Working
- Check if Vercel domain is added to Firebase authorized domains
- Verify all environment variables are set correctly
- Check browser console for errors

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Environment Variables Not Working
- Make sure they start with `NEXT_PUBLIC_`
- Redeploy after adding/changing variables
- Check they're added to the correct environment (Production/Preview/Development)

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Firebase Hosting: https://firebase.google.com/docs/hosting
