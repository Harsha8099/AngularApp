HTML content
<select type="text" class="form-control invalid" id="field_investorTypeId" name="gender" [(ngModel)]="investorRegistration.gender" placeholder="Gender" 
(change)="enableTextArea()">
<option value="" selected disabled>Male/Female</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>
<textarea *ngIf="showTextArea" (keyup)="executeM1()" [(ngModel)]="choosenVal"> </textarea>
{{showInfo}}


Add below lines in TS file
showTextArea = false;
  choosenVal: string;
  showInfo: string;
  investorRegistration={
    gender:''
  }

  enableTextArea(){
    if(this.investorRegistration && this.investorRegistration.gender) {
      this.showTextArea = true;
    }
  }

  executeM1() {
    this.showInfo = '';
    if(this.choosenVal === 'A'){
      this.showInfo = 'A Entered'
    }
    if(this.choosenVal === 'B') {
      this.showInfo = 'B Entered'
    }
  }
