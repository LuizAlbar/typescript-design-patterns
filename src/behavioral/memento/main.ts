import { ImageEditor } from "./image-editor.ts";
import { ImageEditorBackupManager } from "./image-editor-backup-manager.ts";

const imageEditor = new ImageEditor("/media/image.png", "png");
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo("gif");

backupManager.backup();
imageEditor.convertFormatTo("jpg");

console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
