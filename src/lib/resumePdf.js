import { resume } from "../data/resume";

const PAGE = { width: 612, height: 792, margin: 54 }; // US Letter, in points
const ACCENT = [124, 58, 160];
const TEXT = [34, 34, 34];
const MUTED = [100, 100, 100];

// Builds the resume PDF from src/data/resume.js and starts the download.
// jsPDF is loaded on click so it stays out of the main bundle.
export async function downloadResumePdf() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const contentWidth = PAGE.width - PAGE.margin * 2;
  let y = PAGE.margin;

  const ensureSpace = (height) => {
    if (y + height > PAGE.height - PAGE.margin) {
      doc.addPage();
      y = PAGE.margin;
    }
  };

  const write = (text, { size = 10, style = "normal", color = TEXT, indent = 0, gap = 4, reserve = 0 } = {}) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lineHeight = size * 1.3;
    doc.splitTextToSize(text, contentWidth - indent - reserve).forEach((line) => {
      ensureSpace(lineHeight);
      doc.text(line, PAGE.margin + indent, y + size);
      y += lineHeight;
    });
    y += gap;
  };

  const heading = (text) => {
    ensureSpace(40);
    y += 8;
    write(text.toUpperCase(), { size: 11, style: "bold", color: ACCENT, gap: 2 });
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.75);
    doc.line(PAGE.margin, y, PAGE.width - PAGE.margin, y);
    y += 8;
  };

  write(resume.name, { size: 22, style: "bold", gap: 2 });
  write(resume.title, { size: 12, color: ACCENT, gap: 2 });
  write(resume.contact.join("  |  "), { size: 9, color: MUTED, gap: 6 });

  heading("Summary");
  write(resume.summary);

  heading("Technical Skills");
  resume.skills.forEach(({ label, items }) => write(`${label}: ${items}`, { gap: 2 }));

  heading("Experience");
  resume.experience.forEach((job) => {
    ensureSpace(60);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(job.dates, PAGE.width - PAGE.margin, y + 11, { align: "right" });
    // Keep the title clear of the dates on the right
    const reserve = doc.getTextWidth(job.dates) + 16;
    write(`${job.role}, ${job.company}`, { size: 11, style: "bold", gap: 2, reserve });
    write(job.description, { gap: 2 });
    job.bullets.forEach((bullet) => write(`•  ${bullet}`, { indent: 10, gap: 1 }));
    y += 6;
  });

  heading("Education");
  resume.education.forEach((line) => write(line, { gap: 2 }));

  heading("Certifications");
  resume.certifications.forEach((line) => write(line, { gap: 2 }));

  doc.save(`${resume.name.replace(/\W+/g, "-")}-Resume.pdf`);
}
