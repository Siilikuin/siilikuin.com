# Giscus Setup Instructions

Giscus needs to be configured on your GitHub repository before comments will work. Follow these steps:

## Step 1: Enable GitHub Discussions

1. Go to your repository: https://github.com/Siilikuin/siilikuin.com
2. Click on "Settings" tab
3. Scroll down to "Features" section
4. Check the box next to "Discussions"
5. Click "Set up discussions" and create a welcome discussion

## Step 2: Install Giscus App

1. Visit https://github.com/apps/giscus
2. Click "Install"
3. Select "Only select repositories"
4. Choose "Siilikuin/siilikuin.com"
5. Click "Install"

## Step 3: Get Your Configuration

1. Visit https://giscus.app
2. Fill in the configuration:
   - Repository: `Siilikuin/siilikuin.com`
   - Page ↔️ Discussions Mapping: `pathname` (already set)
   - Discussion Category: Choose "Announcements" or create a "Blog Comments" category
   - Features: Leave reactions enabled
   - Theme: Leave as configured (auto-detects light/dark)

3. Scroll down to "Enable giscus" section
4. Copy the `data-repo-id` and `data-category-id` values

## Step 4: Update the Comments Component

Edit `/src/components/Comments.tsx` and replace:
- `repoId="PENDING"` with your actual `data-repo-id`
- `categoryId="PENDING"` with your actual `data-category-id`

Example:
```tsx
<Giscus
  repo="Siilikuin/siilikuin.com"
  repoId="R_kgDON0XJKA"  // <- Your actual repo ID
  category="Announcements"
  categoryId="DIC_kwDON0XJKM4CltMw"  // <- Your actual category ID
  // ... rest of config
/>
```

## Step 5: Test

1. Push your changes to GitHub
2. Visit a blog post on your live site
3. Comments should now be working!

## Optional: Create a Blog Comments Category

For better organization, you might want to create a specific category for blog comments:

1. Go to your repository's Discussions tab
2. Click the gear icon next to "Categories"
3. Click "New category"
4. Name it "Blog Comments"
5. Set format to "Open-ended discussion"
6. Save and use this category in your Giscus configuration

## Troubleshooting

If comments aren't showing:
- Ensure Discussions are enabled on the repository
- Verify the Giscus app is installed on the repository
- Check that repoId and categoryId are correctly set
- Make sure the repository is public (private repos need special configuration)