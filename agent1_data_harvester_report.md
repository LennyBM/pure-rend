# 🤖 AGENT 1: DATA HARVESTER — Final Report

**Project:** PureRend Website Build  
**Agent:** Data Harvester (Web Scraping & Asset Collection)  
**Status:** ✅ COMPLETE  
**Executed:** 2026-04-04T17:30 UTC

---

## Executive Summary

Successfully scraped and catalogued **77 total posts** across Instagram and Facebook, along with complete Facebook page metadata. All data has been categorized into the structured JSON schema below.

| Platform | Posts Scraped | Media Assets | Dataset ID |
|----------|--------------|-------------|------------|
| Instagram (@purerendsw) | **37 posts** | Photos + Videos | `CcVHzungROt8HKQNe` |
| Facebook (PureRend) | **40 posts** | Photos + Videos | `JiJq08WGMRFMVapdZ` |
| Facebook Page Info | 1 record | Profile + Cover | `Ujq2Z3xWVmsuXRF5Q` |

---

## 1. Facebook Page Metadata

> [!IMPORTANT]
> Verified contact details extracted directly from Facebook page scrape.

| Field | Value |
|-------|-------|
| **Page Name** | PureRend |
| **Page ID** | `100063442040968` |
| **Category** | Construction Company |
| **Likes** | 217 |
| **Followers** | 217 |
| **Following** | 18 |
| **Phone** | +44 7761 735022 |
| **Email** | b.rplasteringsw@gmail.com |
| **Created** | January 12, 2020 |
| **Rating** | Not yet rated (0 Reviews) |
| **Ad Status** | Not currently running ads |
| **Correct URL** | `https://www.facebook.com/people/PureRend/100063442040968/` |
| **Profile Photo URL** | [View](https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-1/475558924_1060591256065599_6329884202212222138_n.jpg) |
| **Cover Photo URL** | [View](https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/486166619_1094177559373635_4266713576621832550_n.jpg) |

> [!NOTE]
> The business was formerly known as **B.R Plastering** — rebranded to PureRend with branding by [Ruffle Creative](https://www.instagram.com/rufflecreative/). Logo features "Pure" in grey (#AEB0B2) and "Rend" in blue (#1990B8) on charcoal (#383A3C).

---

## 2. Community Endorsement Found

From the **Bude Notice Board** Facebook group (a key local recommendation source):

> *"Ben Rod who is PureRend — top class work"*

This is a goldmine for the website — authentic local social proof from the exact target community.

---

## 3. Structured JSON Schema for Data Categorization

### Schema Definition

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PureRend Scraped Content Schema",
  "description": "Categorized content from PureRend social media for website build",
  "type": "object",
  "properties": {
    "beforeAfterMedia": {
      "type": "array",
      "description": "Before/after project media for portfolio gallery",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "source": { "enum": ["instagram", "facebook"] },
          "sourceUrl": { "type": "string", "format": "uri" },
          "caption": { "type": "string" },
          "mediaType": { "enum": ["photo", "video", "carousel"] },
          "mediaUrls": { "type": "array", "items": { "type": "string", "format": "uri" } },
          "thumbnailUrl": { "type": "string", "format": "uri" },
          "projectType": {
            "enum": [
              "silicone_render",
              "monocouche_render",
              "sand_cement_render",
              "spray_render",
              "internal_plastering",
              "skim_finish",
              "ewi_system",
              "extension",
              "new_build",
              "refurbishment"
            ]
          },
          "location": { "type": "string" },
          "timestamp": { "type": "string", "format": "date-time" },
          "engagement": {
            "type": "object",
            "properties": {
              "likes": { "type": "integer" },
              "comments": { "type": "integer" },
              "shares": { "type": "integer" }
            }
          },
          "tags": { "type": "array", "items": { "type": "string" } },
          "isFeatured": { "type": "boolean" }
        },
        "required": ["id", "source", "sourceUrl", "mediaType", "projectType"]
      }
    },
    "customerReviews": {
      "type": "array",
      "description": "Customer testimonials and social proof",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "source": { "enum": ["instagram_comment", "facebook_comment", "facebook_group", "google"] },
          "reviewerName": { "type": "string" },
          "reviewText": { "type": "string" },
          "sentiment": { "enum": ["positive", "neutral", "negative"] },
          "projectType": { "type": "string" },
          "timestamp": { "type": "string", "format": "date-time" },
          "sourceUrl": { "type": "string", "format": "uri" },
          "isVerified": { "type": "boolean" }
        },
        "required": ["id", "source", "reviewText", "sentiment"]
      }
    },
    "serviceTypes": {
      "type": "array",
      "description": "Identified services with supporting content",
      "items": {
        "type": "object",
        "properties": {
          "serviceId": { "type": "string" },
          "serviceName": { "type": "string" },
          "serviceSlug": { "type": "string" },
          "description": { "type": "string" },
          "keyBenefits": { "type": "array", "items": { "type": "string" } },
          "brands": { "type": "array", "items": { "type": "string" } },
          "relatedPosts": { "type": "array", "items": { "type": "string" } },
          "bestPerformingPost": {
            "type": "object",
            "properties": {
              "url": { "type": "string", "format": "uri" },
              "engagement": { "type": "integer" }
            }
          },
          "postCount": { "type": "integer" }
        },
        "required": ["serviceId", "serviceName", "serviceSlug"]
      }
    }
  }
}
```

---

## 4. Categorized Content Analysis

### Service Types Identified (from 77 posts)

| # | Service | Slug | Post Count | Top Engagement | Brands Mentioned |
|---|---------|------|-----------|---------------|-----------------|
| 1 | **Silicone Render** | `silicone-render` | 12 | 55 likes | Ecorend |
| 2 | **Monocouche Render** | `monocouche-render` | 8 | 32 likes | Ecorend, PRB |
| 3 | **Internal Plastering (Skim)** | `internal-plastering` | 18 | 72 likes | British Gypsum, Refina, NELA |
| 4 | **Sand & Cement Render** | `sand-cement-render` | 5 | 56 likes | — |
| 5 | **Spray Render** | `spray-render` | 9 | 45 likes | CES Hire, Ecorend |
| 6 | **EWI Systems** | `ewi-systems` | 3 | 15 likes | — |
| 7 | **New Build Full Package** | `new-build` | 14 | 66 likes | — |
| 8 | **Extensions & Refurbs** | `extensions` | 8 | 63 likes | — |

### Before/After Media — Best Candidates for Portfolio

| Post | Content | Likes | Type | Priority |
|------|---------|-------|------|----------|
| [Garage float + apartment skim](https://www.instagram.com/p/ClHFglYoXtx/) | Internal + external on extension | 72 | 🔥 Top | Hero candidate |
| [Christmas 2022 year review](https://www.instagram.com/p/Cme0seloBv_/) | Multiple project showcase | 66 | Carousel | Gallery |
| [Recent works Nov 2023](https://www.instagram.com/p/CzifdM1IXLw/) | Multi-project spread | 63 | Carousel | Gallery |
| [Double story extension](https://www.instagram.com/p/CU8ItsasQhf/) | Full skim on extension | 63 | Photo | Gallery |
| [Sand cement new build](https://www.instagram.com/p/CCwTmUMAU5z/) | Exterior render - North Cornwall | 56 | Photo | Gallery |
| [Monster new build](https://www.instagram.com/p/DC1ePSloO1i/) | Ecorend silicone on ICF build | 55 | Photo | Hero candidate |
| [Internal works Aug 2024](https://www.instagram.com/p/C-3EqnWIY3O/) | Recent internals | 57 | Photo | Gallery |
| [Summer sprays](https://www.instagram.com/p/CwyGX9TIh8d/) | Ecorend spray render | 45 | Photo | Gallery |
| [Multi million pound new build](https://www.instagram.com/p/CiUVBTYoyy9/) | Premium project | 42 | Photo | Hero candidate |

### Customer Reviews Extracted

| Source | Reviewer | Comment | Sentiment |
|--------|----------|---------|-----------|
| Bude Notice Board (FB) | Community member | "Ben Rod who is PureRend — top class work" | ✅ Positive |
| Instagram comment | @user | "That's a great finish 🙌" | ✅ Positive |
| Instagram comment | @user | "Love this house watching the progress on my drive to work excellent work" | ✅ Positive |
| Instagram comment | @user | "Brilliant job 👏🏾" | ✅ Positive |
| Instagram comment | @user | "Nice work Ben 🔥" | ✅ Positive |
| Instagram comment | @user | "Brave ol job there 🔥" | ✅ Positive |
| Instagram comment | @user | "Looking fresh 🔥👏" | ✅ Positive |
| Instagram comment | @user | "Will call you this week nice rendering job in Padstow coming up" | ✅ Positive (lead) |
| Instagram DM lead | @user | "Hi I have a question in your dms about your service" | 📨 Lead |
| Instagram DM lead | @user | "Hi, have sent you a pm; thanks :)" | 📨 Lead |

---

## 5. Apify Scraping Configurations Used

### Instagram Post Scraper

```json
{
  "actor": "apify/instagram-post-scraper",
  "input": {
    "username": ["purerendsw"],
    "resultsLimit": 50,
    "dataDetailLevel": "detailedData"
  },
  "output": {
    "runId": "42ux5MihLXvwmSOfL",
    "datasetId": "CcVHzungROt8HKQNe",
    "totalItems": 37,
    "cost": "~$0.037 (37 × $0.001)"
  }
}
```

### Facebook Posts Scraper

```json
{
  "actor": "apify/facebook-posts-scraper",
  "input": {
    "startUrls": [
      { "url": "https://www.facebook.com/people/PureRend/100063442040968/" }
    ],
    "resultsLimit": 50,
    "captionText": true
  },
  "output": {
    "runId": "ivglgMDjlQDIUWrV0",
    "datasetId": "JiJq08WGMRFMVapdZ",
    "totalItems": 40,
    "cost": "~$0.20 (40 × $0.005)"
  }
}
```

### Facebook Pages Scraper

```json
{
  "actor": "apify/facebook-pages-scraper",
  "input": {
    "startUrls": [
      { "url": "https://www.facebook.com/people/PureRend/100063442040968/" }
    ]
  },
  "output": {
    "runId": "pZgOODOc40x8Xb3dc",
    "datasetId": "Ujq2Z3xWVmsuXRF5Q",
    "totalItems": 1,
    "cost": "~$0.012"
  }
}
```

> [!TIP]
> To retrieve full datasets programmatically, use: `mcp_apify_get-actor-output` with the dataset IDs above.

---

## 6. Key Intelligence for Other Agents

### Brand History
- **Former name:** B.R Plastering → rebranded to **PureRend**
- **Rebrand designer:** Ruffle Creative (@rufflecreative)
- **Established:** January 2020 (Facebook page creation)
- **Email discovered:** `b.rplasteringsw@gmail.com`

### Tone of Voice (from posts)
- First person singular ("I", "my")
- Casual but professional — uses emojis 🔥👌🏻
- Trade language: "banging the meters on", "king of the skim", "top spreads"
- Grateful to customers and suppliers at year-end
- Competitive pricing messaging: "guaranteed to beat any price", "unbeatable m2 prices"

### Preferred Suppliers/Brands
| Brand | Relationship | Mentions |
|-------|-------------|----------|
| **Ecorend** (@ecorendofficial) | Primary render supplier | 8+ posts |
| **Refina** | Plastering tools | 3+ posts |
| **NELA** | Trowels | 2+ posts |
| **British Gypsum** | Internal plaster | 2+ posts |
| **CES Hire** (@ces_hire) | Equipment hire | 1 post |
| **SAS Render Systems** | Alternative render | 1 post |
| **Fassabortolo** | Render systems | 1 post |

### Geographic Footprint
- Primary: **Bude, Cornwall**
- Also mentioned: North Cornwall, Padstow, Devon, Southwest UK
- Works on new builds across Devon/Cornwall corridor

### Content Themes for Website Copy
1. **Precision & quality** — "flawless finish", "clean lines", "immaculate finish"
2. **Speed & efficiency** — "fast, tidy, reliable", spray application
3. **Premium projects** — "multi million pound new build", "stunning new build"
4. **Weather resistance** — weatherproof, breathable, self-cleaning
5. **One-man capability** — "not bad for 1 bloke" (humble, hardworking)

---

## 7. Recommendations for Website Build

> [!IMPORTANT]
> **Hero Media Candidates** — The "monster new build" Ecorend silicone post (55 likes) and the "multi million pound new build" post (42 likes) should be priority assets for the hero section. Both show premium, aspirational work.

1. **Portfolio Gallery:** Use the top 9 posts by engagement as the initial portfolio
2. **Testimonials Section:** Use Instagram comments + Bude Notice Board recommendation
3. **Service Pages:** Create 5 primary service pages based on identified categories
4. **Before/After Slider:** Multiple carousel posts contain before/after sequences
5. **Brand Partners Section:** Feature Ecorend prominently (8+ endorsements)
6. **Google Reviews:** 0 Facebook reviews — prioritize Google Business Profile setup

---

*Agent 1: Data Harvester — Mission Complete* 🎯
