define(['exports', 'jquery', 'iframeTransport'], function (exports) {
    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-31 15:02:36
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-05-31 15:03:29
    */

    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {

        encodeQueryParameters: function encodeQueryParameters(data) {
            var ret = [];
            for (var d in data) {
                ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
            }return ret.join("&");
        },

        uploadFile: async function uploadFile(fileData, url, callback) {

            console.log(fileData);

            var res = await fetch(url, {
                method: 'POST',
                body: fileData
            });

            if (!res.ok) {
                var text = await res.text();
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
    };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJlbmNvZGVRdWVyeVBhcmFtZXRlcnMiLCJkYXRhIiwicmV0IiwiZCIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwidXBsb2FkRmlsZSIsImZpbGVEYXRhIiwidXJsIiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7c0JBS2U7O0FBRVhBLCtCQUF1QiwrQkFBU0MsSUFBVCxFQUFlO0FBQ3RDLGdCQUFJQyxNQUFNLEVBQVY7QUFDQSxpQkFBSyxJQUFJQyxDQUFULElBQWNGLElBQWQ7QUFDR0Msb0JBQUlFLElBQUosQ0FBU0MsbUJBQW1CRixDQUFuQixJQUF3QixHQUF4QixHQUE4QkUsbUJBQW1CSixLQUFLRSxDQUFMLENBQW5CLENBQXZDO0FBREgsYUFFQSxPQUFPRCxJQUFJSSxJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0YsU0FQYTs7QUFTZEMsb0JBQVksMEJBQWVDLFFBQWYsRUFBeUJDLEdBQXpCLEVBQThCQyxRQUE5QixFQUF3Qzs7QUFFN0NDLG9CQUFRQyxHQUFSLENBQVlKLFFBQVo7O0FBRUEsZ0JBQUlLLE1BQU0sTUFBTUMsTUFBTUwsR0FBTixFQUFXO0FBQ3ZCTSx3QkFBUSxNQURlO0FBRXZCQyxzQkFBTVI7QUFGaUIsYUFBWCxDQUFoQjs7QUFLQSxnQkFBSSxDQUFDSyxJQUFJSSxFQUFULEVBQWE7QUFDVCxvQkFBSUMsT0FBTyxNQUFNTCxJQUFJSyxJQUFKLEVBQWpCO0FBQ0FSLHlCQUFTUSxJQUFUO0FBQ0gsYUFIRCxNQUdPO0FBQ0hSO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBbERVLEsiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTMxIDE1OjAyOjM2XG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA1LTMxIDE1OjAzOjI5XG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnanF1ZXJ5JztcbmltcG9ydCAnaWZyYW1lVHJhbnNwb3J0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRcbiAgICBlbmNvZGVRdWVyeVBhcmFtZXRlcnM6IGZ1bmN0aW9uKGRhdGEpIHtcblx0ICAgdmFyIHJldCA9IFtdO1xuXHQgICBmb3IgKHZhciBkIGluIGRhdGEpXG5cdCAgICAgIHJldC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChkKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbZF0pKTtcblx0ICAgcmV0dXJuIHJldC5qb2luKFwiJlwiKTtcblx0fSxcblxuXHR1cGxvYWRGaWxlOiBhc3luYyBmdW5jdGlvbihmaWxlRGF0YSwgdXJsLCBjYWxsYmFjaykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVEYXRhKVxuXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogZmlsZURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICAgICAgICAgIGNhbGxiYWNrKHRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KVxuICAgICAgICAvLyAgICAgaWYgKHJlcy5vaylcbiAgICAgICAgLy8gICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgIC8vICAgICAgICAgY2FsbGJhY2socmVzLnN0YXR1c1RleHQpO1xuICAgICAgICAvLyAgICAgLy8gZWxzZSB0aHJvdyBFcnJvcihgU2VydmVyIHJldHVybmVkICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vICQuYWpheCh7XG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgIHVybDogdXJsLFxuICAgICAgICAvLyAgICAgaWZyYW1lOiB0cnVlLFxuICAgICAgICAvLyAgICAgZmlsZXM6IGZpbGUsXG4gICAgICAgIC8vICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAvLyAgICAgZXJyb3I6IChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjYWxsYmFjayhyZXMucmVzcG9uc2VKU09OLmVycm9yKTtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKF8uaGFzKHJlcywnZXJyb3InKSlcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FsbGJhY2socmVzLmVycm9yKTtcbiAgICAgICAgLy8gICAgICAgICBlbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn0iXX0=