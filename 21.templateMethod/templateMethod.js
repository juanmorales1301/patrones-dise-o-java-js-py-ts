// Clase base
class ReportGenerator {
    // Método plantilla
    generateReport() {
        this.prepareData();
        this.createReport();
        this.saveReport();
    }

    prepareData() {
        throw new Error("Este método debe ser implementado por la subclase");
    }

    createReport() {
        throw new Error("Este método debe ser implementado por la subclase");
    }

    saveReport() {
        console.log("Guardando informe...");
    }
}

// Implementaciones concretas
class PDFReportGenerator extends ReportGenerator {
    prepareData() {
        console.log("Preparando datos para el informe PDF...");
    }

    createReport() {
        console.log("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    prepareData() {
        console.log("Preparando datos para el informe Excel...");
    }

    createReport() {
        console.log("Creando informe Excel...");
    }
}

// Uso
const pdfReport = new PDFReportGenerator();
pdfReport.generateReport();

const excelReport = new ExcelReportGenerator();
excelReport.generateReport();