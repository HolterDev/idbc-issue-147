**free
ctl-opt datedit(*ymd) option(*srcstmt: *nodebugio) dftactgrp(*NO) actgrp('QILE') bnddir('QILE');

dcl-pi *n;
  prog     char(20);
  fnr      packed(5);
  ftext    char(100);
  depn     packed(7);
  xmldaten varchar(32000);
end-pi;

return;
