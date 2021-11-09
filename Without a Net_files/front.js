jQuery(document).ready(function(o){function t(t){t.preventDefault();var a=o(this).data("popup"),c=o(this).find("a").attr("href"),n=a.width,e=a.height,i="toolbar=0,scrollbars=1, location=0, width="+n+",height="+e+",left="+(o(window).width()-n)/2+",top="+(o(window).height()-e)/2;window.open(c,"mb-social-share-window",i).focus(),mbSocialTrack()}function a(t,a){var n=mb_ajax.ajaxurl,e=a.share_url,i=a.network,l=a.collection_id,a=(a.nonce,{block_name:"social",block_action:"ajax_get_count",action:"mbpro_collection_block_front",collection_id:l,collection_type:"social",block_data:{share_url:e,network:i}});o.ajax({type:"POST",url:n,data:a,success:function(o){c(o,t)}})}function c(t,a){var c=o.parseJSON(t),n=o(a).data("onload"),e=parseInt(n.count_threshold),i=parseInt(c.data.count);if(i>=e){var l=n.text,r=n.text2;l=(l=l.replace("{count}",i)).replace("{c}",i),r=(r=r.replace("{count}",i)).replace("{c}",i),o(a).find(".mb-text").html(l),o(a).find(".mb-text2").html(r)}}mbSocialTrack=function(o){},function(){if("function"!=typeof o)return void console.log("Maxbuttons : Jquery load conflict.");o(".maxcollection .mb-collection-item[data-popup]").on("click",t),o(".maxcollection .mb-collection-item[data-onload]").each(function(){var t=o(this).parents(".maxcollection").data("collection"),c=o(this).data("onload");c.collection_id=t,a(this,c)})}()});
/*
     FILE ARCHIVED ON 12:08:58 Mar 23, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:15:10 Feb 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 22.986 (3)
  PetaboxLoader3.resolve: 582.444
  exclusion.robots.policy: 0.303
  PetaboxLoader3.datanode: 359.133 (4)
  exclusion.robots: 0.328
  load_resource: 731.994
  captures_list: 266.856
  LoadShardBlock: 233.296 (3)
  RedisCDXSource: 3.723
  esindex: 0.028
*/