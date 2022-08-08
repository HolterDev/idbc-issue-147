**free
ctl-opt datedit(*ymd) option(*srcstmt: *nodebugio) dftactgrp(*NO) actgrp('QILE') bnddir('QILE');

dcl-pi *n;
  prog     char(20);
  fnr      packed(5);
  ftext    char(100);
  depn     packed(7);
  xmldaten varchar(32000);
  traceId  char(36) options(*nopass);
  runAsUserId char(10) options(*nopass);
end-pi;

return;
