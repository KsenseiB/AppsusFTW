
export class JoomlaCKEditor extends HTMLElement {

	connectedCallback() {
		ClassicEditor
			.create(
				this.querySelector('textarea'),
				{
					toolbar: [ 'headings', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
					heading: {
						options: [
							{ modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
							{ modelElement: 'heading1', viewElement: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
							{ modelElement: 'heading2', viewElement: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
						]
					}
				}
			)
			.then(editor => {
				console.log(editor);
			})
			.catch(error => {
				console.error(error);
			});
	}
}

customElements.define('joomla-ck-editor', JoomlaCKEditor)