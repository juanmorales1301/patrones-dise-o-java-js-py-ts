// Clase abstracta
abstract class ReportGenerator {
    // Método plantilla
    public final void generateReport() {
        prepareData();
        createReport();
        saveReport();
    }

    protected abstract void prepareData();
    protected abstract void createReport();

    private void saveReport() {
        System.out.println("Guardando informe...");
    }
}

// Implementación concreta
class PDFReportGenerator extends ReportGenerator {
    @Override
    protected void prepareData() {
        System.out.println("Preparando datos para el informe PDF...");
    }

    @Override
    protected void createReport() {
        System.out.println("Creando informe PDF...");
    }
}

class ExcelReportGenerator extends ReportGenerator {
    @Override
    protected void prepareData() {
        System.out.println("Preparando datos para el informe Excel...");
    }

    @Override
    protected void createReport() {
        System.out.println("Creando informe Excel...");
    }
}

// Uso
public class templateMethod {
    public static void main(String[] args) {
        ReportGenerator pdfReport = new PDFReportGenerator();
        pdfReport.generateReport();

        ReportGenerator excelReport = new ExcelReportGenerator();
        excelReport.generateReport();
    }
}