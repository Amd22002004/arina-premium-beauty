

## Plan: Add "Results" photo block to Body Contouring page

### What changes

**1. Copy 4 uploaded images to `src/assets/`**

- `user-uploads://1775237741599.jpg` -> `src/assets/korrekciya-result-1.jpg`
- `user-uploads://1775237741602.jpg` -> `src/assets/korrekciya-result-2.jpg`
- `user-uploads://1775237741608.jpg` -> `src/assets/korrekciya-result-3.jpg`
- `user-uploads://1775237741611.jpg` -> `src/assets/korrekciya-result-4.jpg`

**2. Edit `src/pages/KorrekciyaFigurySpb.tsx`**

Insert a new section **after** "Что даёт коррекция фигуры" (line 134) and **before** "Виды процедур" (line 136):

- Section title: "Результаты наших клиентов"
- Subtitle: disclaimer about individual results
- Grid: `grid-cols-1 md:grid-cols-2`, 4 cards with the imported before/after photos
- Each card: rounded corners, border, image with `object-cover`, optional caption (e.g. "Коррекция фигуры — курс 10 процедур")
- Fade-up animation consistent with the rest of the page

Current block order on the page:
1. Hero
2. Кому подходит
3. **Цены** (stays early as designed)
4. Что даёт коррекция фигуры
5. **NEW: Результаты наших клиентов**
6. Виды процедур
7. Как проходит
8. Противопоказания
9. ConsultationCapture / NextStep / Related / CTA

### Technical details

- Images imported as ES6 modules (`import result1 from "@/assets/korrekciya-result-1.jpg"`)
- Responsive: 1 column on mobile, 2 columns on `md:` breakpoint
- Light background (`bg-card`) to separate from adjacent sections

