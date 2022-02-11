/*
* @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
* @Date:   2016-05-31 15:02:36
* @Last Modified by:   lutzer
* @Last Modified time: 2016-05-31 15:03:29
*/

'use strict';

import 'jquery';
import 'iframeTransport';

export default {
	
    encodeQueryParameters: function(data) {
	   var ret = [];
	   for (var d in data)
	      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
	   return ret.join("&");
	},

	uploadFile: async function(fileData, url, callback) {

        console.log(fileData)

        let res = await fetch(url, {
            method: 'POST',
            body: fileData
        })
        
        if (!res.ok) {
            let text = await res.text()
            callback(text);
        } else {
            callback();
        }
        
        // .then(res => {
        //     console.log(res.body)
        //     if (res.ok)
        //         callback()
        //     else
        //         callback(res.statusText);
        //     // else throw Error(`Server returned ${response.status}: ${response.statusText}`)
        // });

        // $.ajax({
        //     method: 'POST',
        //     url: url,
        //     iframe: true,
        //     files: file,
        //     dataType: 'json',
        //     error: (res) => {
        //         callback(res.responseJSON.error);
        //     },
        //     success: (res) => {
        //         if (_.has(res,'error'))
        //             callback(res.error);
        //         else
        //             callback();
        //     }
        // });
    }
}