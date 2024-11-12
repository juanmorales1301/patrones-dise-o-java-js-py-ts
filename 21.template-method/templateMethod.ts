// Clase base
abstract class ReportGenerator {
    // Método plantilla
    public generateReport(): void {
        this.prepareData();
        this.createReport();
        this.saveReport();
    }

    protected abstract prepareData(): void;
    protected abstract createReport(): void;

    private saveReport(): void {
        console.log("Guardando informe...");
    }
}

// Implementaciones concretas
class PDFReportGenerator extends ReportGenerator {
    protected prepareData(): void {
        console.log("Preparando datos para el informe PDF...");
    }

    protected createReport(): void {
        console.log("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    protected prepareData(): void {
        console.log("Preparando datos para el informe Excel...");
    }

    protected createReport(): void {
        console.log("Creando informe Excel...");
    }
}

// Uso
const pdfReport = new PDFReportGenerator();
pdfReport.generateReport();

const excelReport = new ExcelReportGenerator();
excelReport.generateReport();