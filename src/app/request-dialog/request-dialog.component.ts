import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor, Toolbar } from 'ngx-editor';
@Component({
  selector: 'request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent {
  editor: Editor;
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
      this.readFileContents(this.selectedFile);
    } else {
      this.selectedFile = null;
    }
  }
  readFileContents(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const fileBytes: Uint8Array = new Uint8Array(e.target.result);
      console.log('File Bytes:', fileBytes);
    };

    reader.readAsArrayBuffer(file);
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
