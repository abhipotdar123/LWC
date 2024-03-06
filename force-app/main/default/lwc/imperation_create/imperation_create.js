import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Imperation_create extends LightningElement {
  name;
  fax;
  phone;
  industry;

  handleName(event) {
    this.name = event.target.value;
  }

  handlePhone(event) {
    this.phone = event.target.value;
  }

  handleFax(event) {
    this.fax = event.target.value;
  }

  handleIndustry(event) {
    this.industry = event.target.value;
  }

  handleClick() {
    // Step 1: Capture list of fields
    const fields = {
      Name: this.name,
      Phone: this.phone,
      Fax: this.fax,
      Industry: this.industry
    };

    // Step 2: Create API record with fields
    const accountRecord = { apiName: 'Account', fields };

    // Step 3: Call imperation and handle success/error
    createRecord(accountRecord)
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Success!',
            message: 'New Account Created',
            variant: 'success'
          })
        );
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Error!',
            message: error.body.message,
            variant: 'error'
          })
        );
      });
    }
}
