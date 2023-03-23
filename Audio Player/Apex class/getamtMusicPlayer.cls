public class getamtMusicPlayer {
     @AuraEnabled(cacheable=true)
     public static List<Items_AMT_Player__x> musiclist(){
        List<Items_AMT_Player__x> au=[SELECT Id, ExternalId,UpdateDate__c,DisplayUrl,MimeType__c,ContentLength__c,Name__c FROM Items_AMT_Player__x WHERE MimeType__c = 'audio/mpeg'] ; 
         return au;
    }
    @AuraEnabled(cacheable=true)
     public static List<Items_AMT_Player__x> getsongs(String Ids){
        List<Items_AMT_Player__x> au=[SELECT Id, ExternalId,DownloadUrl__c,MimeType__c,ContentLength__c,Name__c FROM Items_AMT_Player__x WHERE ExternalId=:Ids LIMIT 1] ; 
         
         return au;
    }

}