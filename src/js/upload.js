import './../scss/main.scss';

class FileUpload { /* eslint-disable-line */
  /**
   * Constructor of object FileUpload
   */
  constructor(container, name, identifier, addCallback = false, removeCallback = false) {
    this.container = document.querySelector(container);
    this.name = name;
    this.identifier = identifier;
    this.addCallback = addCallback;
    this.removeCallback = removeCallback;
  }

  /**
   * Function to create FileUpload container
   */
  run() {
    this.setUploadEvents();
  }

  /**
   * Return template of file upload field
   */
  addFileCard() {
    const li = document.createElement('li');
    li.classList.add('file-preview-card');

    li.innerHTML = `<label for="${this.identifier}" class="file-preview-button file-preview-add"></label>
                    <button type="button" class="file-preview-button file-preview-remove"></button>
                    <input type="file" name="${this.name}" class="file-preview-hidden" id="${this.identifier}">`;

    this.container.appendChild(li);
  }

  /**
   * Add events to input type file
   */
  setUploadEvents() {
    let childrens = Array.from(this.container.children);
    childrens.forEach((li) => {
      let input = li.querySelector('input.file-preview-hidden');
      input.addEventListener('change', this.changeFileEvent.bind(this, input, this.addCallback));

      let removeButton = li.querySelector('.file-preview-remove');
      removeButton.addEventListener('click', this.removeFileEvent.bind(input, this.removeCallback));
    });
  }

  /**
   * Event added in function setUploadEvents
   */
  changeFileEvent(input, addCallback) {
    const self = input;
    const files = input.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const loadedFile = e.target;

        if (file.type.match('image')) {
          self.parentNode.style.backgroundImage = `url('${loadedFile.result}')`;
        }
      });

      // Read file
      reader.readAsDataURL(file);

      this.addFileCard();

      if (addCallback) {
        addCallback();
      }
    }
  }

  /**
   * Remove Event
   */
  removeFileEvent(removeCallback) {
    const li = this.parentNode;

    if (Array.from(li.children).length > 1) {
      li.parentNode.removeChild(li);
    } else {
      this.value = '';
    }

    if (removeCallback) {
      removeCallback();
    }
  }
}
