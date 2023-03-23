import { LightningElement, wire,track} from 'lwc';
import musiclist from '@salesforce/apex/getamtMusicPlayer.musiclist';
export default class AmtMusicPlayer extends LightningElement {
    @track songslist = [];
    @track datatable = true;
    @track player = false;
    @track listdata;
    @track selectsong='';

    @wire(musiclist)
    wiredlist({data,error}){
        if(data){

            this.listdata = data;

            console.log('data input :'+JSON.stringify(data));
            this.songslist = data.map(song => ({
                id: song.Id,
                externalId : song.ExternalId,
                name: song.Name__c,
                Size: Math.floor(song.ContentLength__c / 1048576)
            }));

        } else if(error){
            console.log('Something went wrong:', error);

        }
    }

    selectedsong(event){
        if(event.currentTarget.dataset.id === 'undefined'){
            this.selectsong='';
        }else{
            this.selectsong = event.currentTarget.dataset.id;
        }
        


        console.log('song Id : '+this.selectsong);
        this.datatable = false;
        this.player = true;
    }

    clickback(){
        this.datatable = true;
        this.player = false;

    }
   
}