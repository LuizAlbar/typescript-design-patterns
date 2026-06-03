import type { ImageEditor } from "./image-editor.ts";
import type { Memento } from "./memento.ts";

// Caretaker
export class ImageEditorBackupManager {
	private readonly imageEditor: ImageEditor;
	private mementos: Memento[] = [];

	constructor(imageEditor: ImageEditor) {
		this.imageEditor = imageEditor;
	}

	backup(): void {
		console.log(`Backup: saving image editor state`);
		this.mementos.push(this.imageEditor.save());
	}

	undo(): void {
		const memento = this.mementos.pop();
		if (!memento) {
			console.log("Backup: no mementos");
			return;
		}

		this.imageEditor.restore(memento);
		console.log(`Backup: ${memento.getName()} restored succesfully`);
	}

	showMementos(): void {
		for (const memento of this.mementos) {
			console.log(memento);
		}
	}
}
