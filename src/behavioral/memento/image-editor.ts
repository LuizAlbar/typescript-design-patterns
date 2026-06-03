import { ConcreteMemento } from "./concrete-memento.ts";
import type { Memento } from "./memento.ts";

export class ImageEditor {
	private filePath: string;
	private fileFormat: string;
	constructor(filePath: string, fileFormat: string) {
		this.filePath = filePath;
		this.fileFormat = fileFormat;
	}

	convertFormatTo(format: "jpg" | "png" | "gif"): void {
		this.fileFormat = format;
		this.filePath = this.filePath.split(".").slice(0, -1).join("");
		this.filePath += `.${format}`;
	}

	save(): Readonly<Memento> {
		const date = new Date();
		return new ConcreteMemento(
			date.toISOString(),
			date,
			this.fileFormat,
			this.fileFormat,
		);
	}

	restore(memento: Memento): void {
		const concreteMemento = memento as ConcreteMemento;
		this.filePath = concreteMemento.getFilePath();
		this.fileFormat = concreteMemento.getFileFormat();
	}
}
