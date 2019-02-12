//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "Schubert_ 12 Waltzes D.145 Op.18 - No.6 in B minor.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":108};
times_arr = [[0.00,1.95,3.60,5.15,6.80,8.45,9.90,11.35,13.00,14.65],
[14.65,16.30,17.95,19.50,21.15,22.60,24.25,25.90,28.15,29.80,31.25],
[31.25,32.70,34.35,36.00,37.65,39.50,41.15,42.80,44.45,46.10,47.75],
[47.75,49.40,51.05,52.70,55.15,56.80,58.45,60.10,61.75,63.40,65.05],
[65.05,67.10,68.75,70.40,72.05,73.70,75.35,77.00,79.05,81.30]];
abc_arr = ["X:1",
"T:Waltz in b minor",
"C:Franz Schubert",
"Z:Public Domain (PianoXML typeset)",
"%%scale 0.83",
"%%score { 1 | 2 }",
"L:1/4",
"Q:1/4=80",
"M:3/4",
"I:linebreak $",
"K:D",
"V:1 treble nm=\"Piano\" snm=\"Pno.\"",
"L:1/8",
"V:2 bass ",
"V:1",
"\"^Moderato\"!pp! (!1!B>!3!d !>!f4) | (!2!c>!3!e !>!f4) | (B>!3!d !>!f3 g) | (g>e)(ed)(dc) | %4",
" (B>d !>!f4) | (c>e !>!f4) |$ (d>f!>!d'c'c'b) | b3 (edc) | (B>d !>!f4) | (c>e !>!f4) | %10",
" (B>d !>!f3 g) | (g>e)(ed)(dc) | (B>d f4) |$!>(! (c>e a4) | (d>fbace | d3) (de^e)!>)! |: %16",
"!mf! (f>g c'3) c' | c'>b f3!p! f | =a>gcece | g>fBde^e |$!mf! f>g c'3 c' | c'>b f3!p! f | %22",
" =a>gcece | g>fBedc |!pp! (B>^d f4) | (^A>e f4) | (B>^d!<(! f3 ^^f)!<)! |$ %27",
"!>(! (^g>e)!>)!(e^d)(dc) | (B>^d f4) | (^A>e f4) |!mf! (B>^d[f^d'][ec'])([ec'][db]) |1 %31",
" [^db]3 de^e :|2 [^db]4 z2 |] %33",
"V:2",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %2",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %4",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |\"_simile\"!ped! F,, [F,^A,E]!ped-up! [F,A,E] |$ %6",
"!ped! B,, [F,B,D]!ped-up! [F,^A,E] |!ped! B,, [F,B,D]!ped-up! [F,B,D] | %8",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %10",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %12",
"!ped! B,, [F,B,D]!ped-up! [F,B,D] |$!ped! =A,, [G,A,CE]!ped-up! [G,A,CE] | %14",
"!ped! A,, [F,A,D]!ped-up! [G,A,C] |!ped! D, [F,A,D]!ped-up! z |: %16",
"!ped! F,, [F,^A,E]!ped-up! [F,A,E] |!ped! B,, [F,B,D]!ped-up! [F,B,D] | %18",
"!ped! F,, [F,^A,E]!ped-up! [F,A,E] |!ped! B,, [F,B,D]!ped-up! [F,B,D] |$ %20",
"!ped! F,, [F,^A,E]!ped-up! [F,A,E] |!ped! B,, [F,B,D]!ped-up! [F,B,D] | %22",
"!ped! F,, [F,^A,E]!ped-up! [F,A,E] |!ped! B,, [F,B,D]!ped-up! [F,B,D] | %24",
"!ped! B,, [F,B,^D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %26",
"!ped! B,, [F,B,^D]!ped-up! [F,B,D] |$!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %28",
"!ped! B,, [F,B,^D]!ped-up! [F,B,D] |!ped! F,, [F,^A,E]!ped-up! [F,A,E] | %30",
"!ped! B,, [F,B,^D]!ped-up! [F,^A,E] |!ped! B,, [B,^D]!ped-up! z :|!ped! [B,^D]2 z!ped-up! |] %33",
""];
abc_enc = [];
