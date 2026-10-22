---

### 3. `API_CONTRACT.md`

```markdown
# API Specification: Contact Endpoint
**Base URL:** `/api`  
**Format Data:** `application/json`  

---

## 1. Submit Contact Form

* **Endpoint:** `POST /api/contact`
* **Deskripsi:** Menerima input dari formulir kontak dan meneruskannya ke inbox via Resend API.

### Request Headers
```http
Content-Type: application/json
Accept: application/json