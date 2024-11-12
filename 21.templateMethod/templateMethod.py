from abc import ABC, abstractmethod

# Clase base
class ReportGenerator(ABC):
    # Método plantilla
    def generate_report(self):
        self.prepare_data()
        self.create_report()
        self.save_report()

    @abstractmethod
    def prepare_data(self):
        pass

    @abstractmethod
    def create_report(self):
        pass

    def save_report(self):
        print("Guardando informe...")

# Implementaciones concretas
class PDFReportGenerator(ReportGenerator):
    def prepare_data(self):
        print("Preparando datos para el informe PDF...")

    def create_report(self):
        print("Creando informe PDF...")

class ExcelReportGenerator(ReportGenerator):
    def prepare_data(self):
        print("Preparando datos para el informe Excel...")

    def create_report(self):
        print("Creando informe Excel...")

# Uso
pdf_report = PDFReportGenerator()
pdf_report.generate_report()

excel_report = ExcelReportGenerator()
excel_report.generate_report()