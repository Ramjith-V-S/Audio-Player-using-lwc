import { LightningElement,track ,wire,api } from 'lwc';
import getsongs from '@salesforce/apex/getamtMusicPlayer.getsongs';
import musicbg from '@salesforce/resourceUrl/musicbg';
export default class AmtAudioPlayer extends LightningElement {
@api songid;
@track songlink ='';
@track songstype ='';
@track name='';
@track imgs =musicbg;
@track back = false;


backbutton(){
this.back =true;

const backevent = new CustomEvent("backbutton",{
    value: this.back
});
this.dispatchEvent(backevent);

}

@wire(getsongs,{Ids:'$songid'})
wiredlist({data,error}){
    if(data){
        // var audio1 = new Audio();
        // audio1.

        this.songlink = data[0].DownloadUrl__c;
        this.songstype =data[0].MimeType__c;
        this.name = data[0].Name__c;


    } else if(error){
        console.log('Something went wrong:', error);

    }
}
}