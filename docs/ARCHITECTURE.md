# System Architecture & Data Schema
**Framework:** Astro 5+ (Islands Architecture)  
**Styling:** Tailwind CSS v4  
**Hosting & Function:** Vercel (Edge/Serverless Function)  

---

## 1. High-Level Architecture Diagram

```mermaid
graph TD
    User([Pengunjung / Recruiter]) -->|HTTP GET| VercelEdge[Vercel CDN / Edge]
    VercelEdge --> AstroPages[Astro Static HTML + Islands]
    
    subgraph Astro Frontend
        AstroPages --> TabSystem[ShowcaseTabs - Filter Coding vs Editing]
        AstroPages --> VideoModal[Video Shorts Player Modal]
        AstroPages --> ContactForm[Contact Form Island]
    end
    
    ContactForm -->|POST /api/contact| ServerlessRoute[Astro API Route: /api/contact]
    ServerlessRoute -->|Send Email| ResendAPI[Resend Email Gateway]
    ResendAPI -->|Forward| Inbox[Email Pribadi Choirul Rizal]