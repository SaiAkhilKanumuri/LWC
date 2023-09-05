import { deleteRecord } from 'lightning/uiRecordApi'
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Wire_deleteRecord extends LightningElement {


    recordId = null
    changeHandler(event)
    {
        this.recordId = event.target.value
    }


    deleteHandler(event)
    {
        deleteRecord(this.recordId).then(result => {
            console.log("Deleted Successfully")
            this.showToast("Success !!","Record deleted Successfully",'success')
        }).catch(error => {
            console.error(error)
            this.showToast('Error !!',"Error occured in deleting",'error')
        })
    }


    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
};