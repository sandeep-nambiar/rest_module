/** List Table */
$(document).ready(function() {
  var handleDataTableButtons = function() {
    if ($("#datatable-buttons").length) {
      $("#datatable-buttons").DataTable({
        dom: "Bfrtip",
        buttons: [
          {
            extend: "copy",
            className: "btn-sm"
          },
          {
            extend: "csv",
            className: "btn-sm"
          },
          {
            extend: "excel",
            className: "btn-sm"
          },
          {
            extend: "pdfHtml5",
            className: "btn-sm"
          },
          {
            extend: "print",
            className: "btn-sm"
          },
        ],
        responsive: true
      });
    }
  };

  TableManageButtons = function() {
    "use strict";
    return {
      init: function() {
        handleDataTableButtons();
      }
    };
  }();

  $('#datatable').dataTable();
  $('#datatable-keytable').DataTable({
    keys: true
  });

  $('#datatable-responsive').DataTable();

  $('#datatable-scroller').DataTable({
    ajax: "js/datatables/json/scroller-demo.json",
    deferRender: true,
    scrollY: 380,
    scrollCollapse: true,
    scroller: true
  });

  var table = $('#datatable-fixed-header').DataTable({
    fixedHeader: true
  });

  TableManageButtons.init();
});
/** /List Table */
/*
Lobibox for confirmation
 */
function confirmationBox(elem,url,title,msg){
    var that       =   $(elem);
    Lobibox.confirm({
        msg: msg,
        title: title,
        buttonsAlign: 'right',
        closeButton: false,
        callback: function ($this, type, ev) {
            if (type === 'yes') {
                $.ajax({
                    type: "GET",
                    url: url,
                    data: "",
                    success: function() {
                        that.parent('td').parent('tr').remove();
                        Lobibox.notify('success', {
                            msg: 'Selected item has been deleted'
                        });
                    }
                });       
            } else if (type === 'no') {
                
            }
        }
    });
    return false;
}