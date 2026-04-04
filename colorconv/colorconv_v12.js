// JavaScript Document created Uncoated 2025_02_25 - D Visual
// Encoding: UTF-8
// charset=UTF-8

var PCSD50 = {X:96.42, Y:100, Z:82.49}; //белая точка profile connection space согласно спецификации ICC
var wmp = {X:84.552, Y:87.683, Z:74.716}; //fogra39 wp
var FRP = 4; // селектор CMYK
var refWPriority = false; //приоритет селектора RefWhite или Veer определяется в интерфейсе
//var hexTD = ["#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E","#6AA43E"];
var plusLCHabL = [];
var plusLCHabC = [];
var hexTD = [];
var plusTD = true;
var Har = 0;
var alertD65 = 0.0;
var alertFogra = 0.0;
secondbgc1 = false;
var VR = 19;
var VRI = 2396;
var VRP = "PANTONE v5 ";
var VRPp = "PANTONE v5 ";
var chroma_cut_value = 8;
digitink = 0;
digitinkR = 2;
surface = 4; //sRGB
clipping_selector = true;
mapping_selector = true;
gamut_error = 0;
fixLCHabC = 0.0;
fixLCHabL = 0.0;
stooperSL = false;
vhigh = 300;
mouse_x = 1;
mouse_y = 1;
refWcct = 0;
var XYZ = {X:0.0, Y:0.0, Z:0.0};
var xyY = {x:0.0, y:0.0, Y:0.0};
var Lab = {L:50.0, a:0.0, b:0.0};
var mem_old = [[61.8,-33.29,45.15],[61.8,-33.29,45.15]];
var Luv = {L:0.0, u:0.0, v:0.0};
var LCHab = {L:50.0, C:0.0, H:0.0};
var LCHuv = {L:0.0, C:0.0, H:0.0};
var RGB = {R:0.0, G:0.0, B:0.0};
var CMYK = {C:0.0, M:0.0, Y:0.0, K:0.0};
var CCT = 5000.0;
var Tint = 0.0;
var DomWavelengthNm = 0.0;
var Gamma = 1.0;
var GammaRGB = 1.0;
var GammaRGBIndex = 0.0;
var RefWhite = {X:0.0, Y:0.0, Z:0.0};
var RefWhitexyY = {x:0.0, y:0.0}
var ScaleXYZ = true;
var ScaleY = false;
var ScaleRGB = true;
var kE = 216.0 / 24389.0;
var kK = 24389.0 / 27.0;
var kKE = 8.0;
var AdaptationMethod = 0;
var RefWhiteRGB = {X:0.0, Y:0.0, Z:0.0};
var MtxRGB2XYZ = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxXYZ2RGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxToRGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxFromRGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxAdaptMa = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxAdaptMaI = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var predefined_rgb = ["srgb","srgb-linear","display-p3","a98-rgb","prophoto-rgb","rec2020"];
var predef = 0; //srgb
var predefCSSv4 = false;
var labPrioritet = true;

/* 360nm to 830nm in 5nm increments */
var CIE1931StdObs_x = [
	0.000129900000, 0.000232100000, 0.000414900000, 0.000741600000, 0.001368000000, 0.002236000000,
	0.004243000000, 0.007650000000, 0.014310000000, 0.023190000000, 0.043510000000, 0.077630000000, 0.134380000000, 0.214770000000, 0.283900000000, 0.328500000000,
	0.348280000000, 0.348060000000, 0.336200000000, 0.318700000000, 0.290800000000, 0.251100000000, 0.195360000000, 0.142100000000, 0.095640000000, 0.057950010000,
	0.032010000000, 0.014700000000, 0.004900000000, 0.002400000000, 0.009300000000, 0.029100000000, 0.063270000000, 0.109600000000, 0.165500000000, 0.225749900000,
	0.290400000000, 0.359700000000, 0.433449900000, 0.512050100000, 0.594500000000, 0.678400000000, 0.762100000000, 0.842500000000, 0.916300000000, 0.978600000000,
	1.026300000000, 1.056700000000, 1.062200000000, 1.045600000000, 1.002600000000, 0.938400000000, 0.854449900000, 0.751400000000, 0.642400000000, 0.541900000000,
	0.447900000000, 0.360800000000, 0.283500000000, 0.218700000000, 0.164900000000, 0.121200000000, 0.087400000000, 0.063600000000, 0.046770000000, 0.032900000000,
	0.022700000000, 0.015840000000, 0.011359160000, 0.008110916000, 0.005790346000, 0.004109457000, 0.002899327000, 0.002049190000, 0.001439971000, 0.000999949300,
	0.000690078600, 0.000476021300, 0.000332301100, 0.000234826100, 0.000166150500, 0.000117413000, 0.000083075270, 0.000058706520, 0.000041509940, 0.000029353260,
	0.000020673830, 0.000014559770, 0.000010253980, 0.000007221456, 0.000005085868, 0.000003581652, 0.000002522525, 0.000001776509, 0.000001251141];
var CIE1931StdObs_y = [
	0.000003917000, 0.000006965000, 0.000012390000, 0.000022020000, 0.000039000000, 0.000064000000,
	0.000120000000, 0.000217000000, 0.000396000000, 0.000640000000, 0.001210000000, 0.002180000000, 0.004000000000, 0.007300000000, 0.011600000000, 0.016840000000,
	0.023000000000, 0.029800000000, 0.038000000000, 0.048000000000, 0.060000000000, 0.073900000000, 0.090980000000, 0.112600000000, 0.139020000000, 0.169300000000,
	0.208020000000, 0.258600000000, 0.323000000000, 0.407300000000, 0.503000000000, 0.608200000000, 0.710000000000, 0.793200000000, 0.862000000000, 0.914850100000,
	0.954000000000, 0.980300000000, 0.994950100000, 1.000000000000, 0.995000000000, 0.978600000000, 0.952000000000, 0.915400000000, 0.870000000000, 0.816300000000,
	0.757000000000, 0.694900000000, 0.631000000000, 0.566800000000, 0.503000000000, 0.441200000000, 0.381000000000, 0.321000000000, 0.265000000000, 0.217000000000,
	0.175000000000, 0.138200000000, 0.107000000000, 0.081600000000, 0.061000000000, 0.044580000000, 0.032000000000, 0.023200000000, 0.017000000000, 0.011920000000,
	0.008210000000, 0.005723000000, 0.004102000000, 0.002929000000, 0.002091000000, 0.001484000000, 0.001047000000, 0.000740000000, 0.000520000000, 0.000361100000,
	0.000249200000, 0.000171900000, 0.000120000000, 0.000084800000, 0.000060000000, 0.000042400000, 0.000030000000, 0.000021200000, 0.000014990000, 0.000010600000,
	0.000007465700, 0.000005257800, 0.000003702900, 0.000002607800, 0.000001836600, 0.000001293400, 0.000000910930, 0.000000641530, 0.000000451810];
var CIE1931StdObs_z = [
	0.000606100000, 0.001086000000, 0.001946000000, 0.003486000000, 0.006450001000, 0.010549990000,
	0.020050010000, 0.036210000000, 0.067850010000, 0.110200000000, 0.207400000000, 0.371300000000, 0.645600000000, 1.039050100000, 1.385600000000, 1.622960000000,
	1.747060000000, 1.782600000000, 1.772110000000, 1.744100000000, 1.669200000000, 1.528100000000, 1.287640000000, 1.041900000000, 0.812950100000, 0.616200000000,
	0.465180000000, 0.353300000000, 0.272000000000, 0.212300000000, 0.158200000000, 0.111700000000, 0.078249990000, 0.057250010000, 0.042160000000, 0.029840000000,
	0.020300000000, 0.013400000000, 0.008749999000, 0.005749999000, 0.003900000000, 0.002749999000, 0.002100000000, 0.001800000000, 0.001650001000, 0.001400000000,
	0.001100000000, 0.001000000000, 0.000800000000, 0.000600000000, 0.000340000000, 0.000240000000, 0.000190000000, 0.000100000000, 0.000049999990, 0.000030000000,
	0.000020000000, 0.000010000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000];

function CMYKSelect() {
	switch (document.converter.Fogra.selectedIndex) {
		case 0: // fogra 39
		FRP = 0;
		outCMYKname = "Coated Fogra 39 Perceptual";
		break;
		case 1: // fogra 39 MaxK
		FRP = 1;
		outCMYKname = "Coated Fogra 39 MaxK Perceptual";
		break;
		case 2: // fogra 45
		FRP = 2;
		outCMYKname = "LWC Fogra 45 Relative";
		break;
		case 3: // fogra 47
		FRP = 3;
		outCMYKname = "Uncoated Fogra 47 Relative";
		break;
		case 4: // fogra 39 Rel
		FRP = 4;
		outCMYKname = "Coated Fogra 39 Relative";
		break;
		case 5: // fogra 39 Abs
		FRP = 4; //!!!
		outCMYKname = "Coated Fogra 39 Absolute";
		break;
	}
}

function AbsoluteCMYK2XYZcalc() {
	if (document.converter.Fogra.selectedIndex == 5) {
		document.converter.RefWhite.selectedIndex = 3;
		XYZ.X = (wmp.X / PCSD50.X) * XYZ.X;
		XYZ.Y = (wmp.Y / PCSD50.Y) * XYZ.Y;
		XYZ.Z = (wmp.Z / PCSD50.Z) * XYZ.Z;
		XYZ2Lab();
}}

function AbsPrompt(theform) {
	document.converter.RefWhite.selectedIndex = 3;
	if (theform.Fogra.selectedIndex == 5) {
		var sel5 = prompt("Можна змінити XYZ білої мітки профіля CMYK в розумних межах,\nвводити нові значення через табулятор, пробіл або кому.\nXYZ белої мітки профілю Fogra 39 рівні 84.552 87.683 74.716",wmp.X+"	"+wmp.Y+"	"+wmp.Z);
		var selsplit = sel5.split(/ |\t|	|,/g); //пробел, запятая, табулятор
		wmp.X = parseFloat(selsplit[0]);
		wmp.Y = parseFloat(selsplit[1]);
		wmp.Z = parseFloat(selsplit[2]);
	}}

function CMYK2Lab() {
	CMYKSelect();
	if (CMYK.C <= 0) {CMYK.C = 0.0;}
	if (CMYK.M <= 0) {CMYK.M = 0.0;}
	if (CMYK.Y <= 0) {CMYK.Y = 0.0;}
	if (CMYK.K <= 0) {CMYK.K = 0.0;}
	if (CMYK.C > 100) {CMYK.C = 100.0;}
	if (CMYK.M > 100) {CMYK.M = 100.0;}
	if (CMYK.Y > 100) {CMYK.Y = 100.0;}
	if (CMYK.K > 100) {CMYK.K = 100.0;}
	
	for (var i=0; i<2001; i++) {
		if (CMYK.C >= A2B0_f39_CLUT_Input_Int[i] && CMYK.C < A2B0_f39_CLUT_Input_Int[i+1]) {
			var C = A2B0_f39_CLUT_C_Int[FRP][i];
			}
		if (CMYK.M >= A2B0_f39_CLUT_Input_Int[i] && CMYK.M < A2B0_f39_CLUT_Input_Int[i+1]) {
			var M = A2B0_f39_CLUT_M_Int[FRP][i];
			}
		if (CMYK.Y >= A2B0_f39_CLUT_Input_Int[i] && CMYK.Y < A2B0_f39_CLUT_Input_Int[i+1]) {
			var Y = A2B0_f39_CLUT_Y_Int[FRP][i];
			}
		if (CMYK.K >= A2B0_f39_CLUT_Input_Int[i] && CMYK.K < A2B0_f39_CLUT_Input_Int[i+1]) {
			var K = A2B0_f39_CLUT_K_Int[FRP][i];
			}}
		if (C == 100.0) {C = 99.9999;}
		if (M == 100.0) {M = 99.9999;}
		if (Y == 100.0) {Y = 99.9999;}
		if (K == 100.0) {K = 99.9999;}

		for (var i=0; i < (14641-1331); i+=1331) {
			if(C >= A2B0_f39_7_C[FRP][i] && C < A2B0_f39_7_C[FRP][i+1331]){
			var A2B0C = i;
		}}
		for (var i=A2B0C; i < A2B0C+(1331-121); i+=121) {
			if(M >= A2B0_f39_7_M[FRP][i] && M < A2B0_f39_7_M[FRP][i+121]){
			var A2B0M = i;
		}}
		for (var i=A2B0M; i < A2B0M+121; i+=11) {
			if(Y >= A2B0_f39_7_Y[FRP][i] && Y < A2B0_f39_7_Y[FRP][i+11]){
			var A2B0Y = i;
		}}
		for (var i=A2B0Y; i < A2B0Y+11; i++) {
			if(K >= A2B0_f39_7_K[FRP][i] && K < A2B0_f39_7_K[FRP][i+1]){
			var strt = i;
		}}
		
var delitel = (A2B0_f39_7_C[FRP][strt+1331] - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - A2B0_f39_7_Y[FRP][strt]);
var delitel2 = (A2B0_f39_7_C[FRP][strt+1331+1] - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+121+1] - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+11+1] - A2B0_f39_7_Y[FRP][strt+1]);
		var TriLinearL1 = 
		A2B0_f39_7_L[FRP][strt] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_L[FRP][strt+11] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_L[FRP][strt+121] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_L[FRP][strt+132] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_L[FRP][strt+1331] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1342] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_L[FRP][strt+1452] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1463] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]);
		var TriLinearL2 = 
		A2B0_f39_7_L[FRP][strt+1] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1+11] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_L[FRP][strt+1+121] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1+132] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_L[FRP][strt+1+1331] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1+1342] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_L[FRP][strt+1+1452] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_L[FRP][strt+1+1463] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]);
		
		var TriLineara1 = 
		A2B0_f39_7_a[FRP][strt] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_a[FRP][strt+11] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_a[FRP][strt+121] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_a[FRP][strt+132] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_a[FRP][strt+1331] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1342] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_a[FRP][strt+1452] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1463] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]);
		var TriLineara2 = 
		A2B0_f39_7_a[FRP][strt+1] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1+11] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_a[FRP][strt+1+121] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1+132] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_a[FRP][strt+1+1331] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1+1342] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_a[FRP][strt+1+1452] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_a[FRP][strt+1+1463] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]);
		
		var TriLinearb1 = 
		A2B0_f39_7_b[FRP][strt] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_b[FRP][strt+11] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_b[FRP][strt+121] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_b[FRP][strt+132] / delitel * (A2B0_f39_7_C[FRP][strt+1331] - C) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_b[FRP][strt+1331] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1342] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (A2B0_f39_7_M[FRP][strt+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt]) +
		A2B0_f39_7_b[FRP][strt+1452] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (A2B0_f39_7_Y[FRP][strt+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1463] / delitel * (C - A2B0_f39_7_C[FRP][strt]) * (M - A2B0_f39_7_M[FRP][strt]) * (Y - A2B0_f39_7_Y[FRP][strt]);
		var TriLinearb2 = 
		A2B0_f39_7_b[FRP][strt+1] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1+11] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_b[FRP][strt+1+121] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1+132] / delitel2 * (A2B0_f39_7_C[FRP][strt+1+1331] - C) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_b[FRP][strt+1+1331] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1+1342] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (A2B0_f39_7_M[FRP][strt+1+121] - M) * (Y - A2B0_f39_7_Y[FRP][strt+1]) +
		A2B0_f39_7_b[FRP][strt+1+1452] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (A2B0_f39_7_Y[FRP][strt+1+11] - Y) +
		A2B0_f39_7_b[FRP][strt+1+1463] / delitel2 * (C - A2B0_f39_7_C[FRP][strt+1]) * (M - A2B0_f39_7_M[FRP][strt+1]) * (Y - A2B0_f39_7_Y[FRP][strt+1]);
		
		Lab.L = TriLinearL1 + (TriLinearL2 - TriLinearL1) * (K - A2B0_f39_7_K[FRP][strt]) / (A2B0_f39_7_K[FRP][strt+1] - A2B0_f39_7_K[FRP][strt]);
		Lab.a = TriLineara1 + (TriLineara2 - TriLineara1) * (K - A2B0_f39_7_K[FRP][strt]) / (A2B0_f39_7_K[FRP][strt+1] - A2B0_f39_7_K[FRP][strt]);
		Lab.b = TriLinearb1 + (TriLinearb2 - TriLinearb1) * (K - A2B0_f39_7_K[FRP][strt]) / (A2B0_f39_7_K[FRP][strt+1] - A2B0_f39_7_K[FRP][strt]);
		
		if (Lab.L > 100.0) {Lab.L = 100.0}
}

function Lab2CMYK(L,a,b) {
	var Ltemp = 0.0;
	if (L == 100.0 && a == 0.0 && b == 0.0) {
		CMYK.C = 0.0;
		CMYK.M = 0.0;
		CMYK.Y = 0.0;
		CMYK.K = 0.0;
		} else {
	if (a > 126) {a = 126.0;}
	if (b > 126) {b = 126.0;}
	if (a <= -128) {a = -127.99;}
	if (b <= -128) {b = -127.99;}
	
	if (L >= 100.0 && a != 0.0 || L >= 100.0 && b != 0.0) {
		L = 99.999;
	}
	
/* Absolute modul ---------------------------------*/
	if (document.converter.Fogra.selectedIndex == 5) {
	var fy = (L + 16.0) / 116.0;
	var fx = 0.002 * a + fy;
	var fz = fy - 0.005 * b;
	
	var fx3 = fx * fx * fx;
	var fz3 = fz * fz * fz;
	
	var xr = (fx3 > kE) ? fx3 : ((116.0 * fx - 16.0) / kK);
	var yr = (L > kKE) ? Math.pow((L + 16.0) / 116.0, 3.0) : (L / kK);
	var zr = (fz3 > kE) ? fz3 : ((116.0 * fz - 16.0) / kK);
	
	var XYZXa = xr * RefWhite.X;
	var XYZYa = yr * RefWhite.Y;
	var XYZZa = zr * RefWhite.Z;

		XYZXa = (PCSD50.X / wmp.X) * XYZXa; /*absolute to rel*/
		XYZYa = (PCSD50.Y / wmp.Y) * XYZYa;
		XYZZa = (PCSD50.Z / wmp.Z) * XYZZa;
		
	var xr = XYZXa / RefWhite.X;
	var yr = XYZYa / RefWhite.Y;
	var zr = XYZZa / RefWhite.Z;
	
	var fx = (xr > kE) ? Math.pow(xr, 1.0 / 3.0) : ((kK * xr + 16.0) / 116.0);
	var fy = (yr > kE) ? Math.pow(yr, 1.0 / 3.0) : ((kK * yr + 16.0) / 116.0);
	var fz = (zr > kE) ? Math.pow(zr, 1.0 / 3.0) : ((kK * zr + 16.0) / 116.0);
	
	L = 116.0 * fy - 16.0;
	a = 500.0 * (fx - fy);
	b = 200.0 * (fy - fz);

	} //Fogra.selectedIndex == 5
/* End Absolute modul ---------------------------------*/

	for (var i=0; i<2001; i++) {
		if (L >= B2A0_f39_CLUT_L_Input_Int[i] && L < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			Ltemp = B2A0_f39_CLUT_L_Output_Int[i];
	}}
		L = Ltemp;
	
	if (L < 100.0) {
	
	for (var i=0; i<(4913-289); i+=289) {
		if(L >= B2A0_f39_17_L[FRP][i] && L < B2A0_f39_17_L[FRP][i+289]){
 			var B2A0L = i;
 		}}
	for (var i=B2A0L; i<(B2A0L+289-17); i+=17) {
		if(a >= B2A0_f39_17_a[FRP][i] && a < B2A0_f39_17_a[FRP][i+17]) {
			var B2A0a = i;
		}}
	for (var i=B2A0a; i<(B2A0a+17); i++) {
		if(b >= B2A0_f39_17_b[FRP][i] && b < B2A0_f39_17_b[FRP][i+1]) {
			var B2A0b = i;
		}}
			
		var delitel = (B2A0_f39_17_L[FRP][B2A0b+289] - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - B2A0_f39_17_b[FRP][B2A0b]);
		
		var TriLinearC = 
		B2A0_f39_17_C[FRP][B2A0b] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+1] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_C[FRP][B2A0b+17] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+18] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_C[FRP][B2A0b+289] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+290] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_C[FRP][B2A0b+306] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+307] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);

		var TriLinearM = 
		B2A0_f39_17_M[FRP][B2A0b] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+1] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_M[FRP][B2A0b+17] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+18] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_M[FRP][B2A0b+289] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+290] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_M[FRP][B2A0b+306] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+307] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		var TriLinearY = 
		B2A0_f39_17_Y[FRP][B2A0b] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+1] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_Y[FRP][B2A0b+17] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+18] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_Y[FRP][B2A0b+289] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+290] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_Y[FRP][B2A0b+306] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+307] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		var TriLinearK = 
		B2A0_f39_17_K[FRP][B2A0b] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+1] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_K[FRP][B2A0b+17] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+18] / delitel * (B2A0_f39_17_L[FRP][B2A0b+289] - L) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_K[FRP][B2A0b+289] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+290] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_K[FRP][B2A0b+306] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+307] / delitel * (L - B2A0_f39_17_L[FRP][B2A0b]) * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		if (TriLinearC <= 0) {TriLinearC = 0.0;}
		if (TriLinearM <= 0) {TriLinearM = 0.0;}
		if (TriLinearY <= 0) {TriLinearY = 0.0;}
		if (TriLinearK <= 0) {TriLinearK = 0.0;}
		
		for (var i=0; i<2001; i++) {
		if (TriLinearC >= B2A0_f39_CLUT_L_Input_Int[i] && TriLinearC < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.C = Math.abs(B2A0_f39_CLUT_C_Output_Int[FRP][i]);
		}
		if (TriLinearM >= B2A0_f39_CLUT_L_Input_Int[i] && TriLinearM < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.M = Math.abs(B2A0_f39_CLUT_M_Output_Int[FRP][i]);
		}
		if (TriLinearY >= B2A0_f39_CLUT_L_Input_Int[i] && TriLinearY < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.Y = Math.abs(B2A0_f39_CLUT_Y_Output_Int[FRP][i]);
		}
		if (TriLinearK >= B2A0_f39_CLUT_L_Input_Int[i] && TriLinearK < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.K = Math.abs(B2A0_f39_CLUT_K_Output_Int[FRP][i]);
		}}	
	} else { // L = 100

	for (var i=4624; i<=4913; i+=17) {
		if(a >= B2A0_f39_17_a[FRP][i] && a < B2A0_f39_17_a[FRP][i+17]) {
			var B2A0a = i;
		}}
	for (var i=B2A0a; i<(B2A0a+17); i++) {
		if(b >= B2A0_f39_17_b[FRP][i] && b < B2A0_f39_17_b[FRP][i+1]) {
			var B2A0b = i;
		}}
		
		var delitel = (B2A0_f39_17_a[FRP][B2A0b+17] - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - B2A0_f39_17_b[FRP][B2A0b]);
		
		var BiLinearC = 
		B2A0_f39_17_C[FRP][B2A0b] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+1] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_C[FRP][B2A0b+17] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_C[FRP][B2A0b+18] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		var BiLinearM = 
		B2A0_f39_17_M[FRP][B2A0b] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+1] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_M[FRP][B2A0b+17] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_M[FRP][B2A0b+18] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		var BiLinearY = 
		B2A0_f39_17_Y[FRP][B2A0b] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+1] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_Y[FRP][B2A0b+17] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_Y[FRP][B2A0b+18] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		var BiLinearK = 
		B2A0_f39_17_K[FRP][B2A0b] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+1] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (B2A0_f39_17_b[FRP][B2A0b+1] - b) +
		B2A0_f39_17_K[FRP][B2A0b+17] / delitel * (B2A0_f39_17_a[FRP][B2A0b+17] - a) * (b - B2A0_f39_17_b[FRP][B2A0b]) +
		B2A0_f39_17_K[FRP][B2A0b+18] / delitel * (a - B2A0_f39_17_a[FRP][B2A0b]) * (b - B2A0_f39_17_b[FRP][B2A0b]);
		
		if (BiLinearC <= 0) {BiLinearC = 0.0;}
		if (BiLinearM <= 0) {BiLinearM = 0.0;}
		if (BiLinearY <= 0) {BiLinearY = 0.0;}
		if (BiLinearK <= 0) {BiLinearK = 0.0;}
		
		for (var i=0; i<2001; i++) {
		if (BiLinearC >= B2A0_f39_CLUT_L_Input_Int[i] && BiLinearC < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.C = Math.abs(B2A0_f39_CLUT_C_Output_Int[FRP][i]);
		}
		if (BiLinearM >= B2A0_f39_CLUT_L_Input_Int[i] && BiLinearM < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.M = Math.abs(B2A0_f39_CLUT_M_Output_Int[FRP][i]);
		}
		if (BiLinearY >= B2A0_f39_CLUT_L_Input_Int[i] && BiLinearY < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.Y = Math.abs(B2A0_f39_CLUT_Y_Output_Int[FRP][i]);
		}
		if (BiLinearK >= B2A0_f39_CLUT_L_Input_Int[i] && BiLinearK < B2A0_f39_CLUT_L_Input_Int[i+1]) {
			CMYK.K = Math.abs(B2A0_f39_CLUT_K_Output_Int[FRP][i]);
		}}
		
	}
		}
}

function PantoneSelect(theForm) {

	switch (theForm.Veer.selectedIndex)
	{
		case 0:	// PANTONE+ D50 2°
			VR = 0;
			VRI = 1755;
			VRP = "PANTONE+ ";
			VRPp = "PANTONE+ ";
			nameSpottoOut = "PANTONE+ D50, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 1:	// PANTONEr D50 2°
			VR = 1;
			VRI = 1124;
			VRP = "PANTONE® ";
			VRPp = "PANTONE® ";
			nameSpottoOut = "PANTONE® D50, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 2:	// PANTONE+ D50 10°
			VR = 2;
			VRI = 1755;
			VRP = "PANTONE+ ";
			VRPp = "PANTONE+ ";
			nameSpottoOut = "PANTONE+ D50, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 3:	// PANTONEr D50 10°
			VR = 3;
			VRI = 1124;
			VRP = "PANTONE® ";
			VRPp = "PANTONE® ";
			nameSpottoOut = "PANTONE® D50, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 4:	// PANTONE+ D65 2°
			VR = 4;
			VRI = 1755;
			VRP = "PANTONE+ ";
			VRPp = "PANTONE+ ";
			nameSpottoOut = "PANTONE+ D65, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 5:	// PANTONEr D65 2°
			VR = 5;
			VRI = 1124;
			VRP = "PANTONE® ";
			VRPp = "PANTONE® ";
			nameSpottoOut = "PANTONE® D65, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 6:	// PANTONE+ D65 10°
			VR = 6;
			VRI = 1755;
			VRP = "PANTONE+ ";
			VRPp = "PANTONE+ ";
			nameSpottoOut = "PANTONE+ D65, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 7:	// PANTONEr D65 10°
			VR = 7;
			VRI = 1124;
			VRP = "PANTONE® ";
			VRPp = "PANTONE® ";
			nameSpottoOut = "PANTONE® D65, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 8:	// RAL Classic 213 Ahtung! D65! 10°
			VR = 8;
			VRI = 213;
			VRP = "RAL ";
			VRPp = "RAL Classic ";
			nameSpottoOut = "RAL Classic D65, 10°";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 9:	// RAL Design 1841 Ahtung! D65! 10°
			VR = 9;
			VRI = 1841;
			VRP = "";
			VRPp = "RAL Design ";
			nameSpottoOut = "RAL Design D65, 10°";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 10:	// RAL Effect 420 Ahtung! D65! 10°
			VR = 10;
			VRI = 420;
			VRP = "RAL ";
			VRPp = "RAL Effect ";
			nameSpottoOut = "RAL Effect D65, 10°";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 11:	// NCS 1952 Ahtung! D65! 10°
			VR = 11;
			VRI = 1952;
			VRP = "NCS ";
			VRPp = "NCS ";
			nameSpottoOut = "NCS D65, 10°";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 12:	// DIN 573 Ahtung! D65! 10°
			VR = 12;
			VRI = 573;
			VRP = "";
			VRPp = "DIN ";
			nameSpottoOut = "DIN D65, 10°";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 13:	// RAL Classic 213 D50 chad 10°
			VR = 13;
			VRI = 213;
			VRP = "RAL ";
			VRPp = "RAL Classic ";
			nameSpottoOut = "RAL Classic D50, 10°";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 14:	// RAL Design 1841 D50 chad 10°
			VR = 14;
			VRI = 1841;
			VRP = "";
			VRPp = "RAL Design ";
			nameSpottoOut = "RAL Design D50, 10°";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 15:	// RAL Effect 420 D50 chad 10°
			VR = 15;
			VRI = 420;
			VRP = "RAL ";
			VRPp = "RAL Effect ";
			nameSpottoOut = "RAL Effect D50, 10°";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 16:	// NCS 1952 D50 chad 10°
			VR = 16;
			VRI = 1952;
			VRP = "NCS ";
			VRPp = "NCS ";
			nameSpottoOut = "NCS D50, 10°";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 17:	// DIN 573 D50 chad 10°
			VR = 17;
			VRI = 573;
			VRP = "";
			VRPp = "DIN ";
			nameSpottoOut = "DIN D50, 10°";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 18:	// nothing
			VR = 18;
			VRI = 1;
			VRP = "nothing";
			VRPp = "не выбран ";
			nameSpottoOut = "nothing";
			psp[18][0][1] = Lab.L;
			psp[18][0][2] = Lab.a;
			psp[18][0][3] = Lab.b;
			break;
		case 19:	// PANTONE v5 D50 2° M2
			VR = 19;
			VRI = 2396;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 (M2)";
			nameSpottoOut = "PANTONE v5 D50, 2° (M2)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 20:	// PANTONE v5 D50 2° M0
			VR = 20;
			VRI = 2369;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 ";
			nameSpottoOut = "PANTONE v5 D50, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 21:	// PANTONE v5 D50 10° M0
			VR = 21;
			VRI = 2369;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 ";
			nameSpottoOut = "PANTONE v5 D50, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 22:	// PANTONE v5 D65 2° M0
			VR = 22;
			VRI = 2369;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 ";
			nameSpottoOut = "PANTONE v5 D65, 2° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 23:	// PANTONE v5 D65 10° M0
			VR = 23;
			VRI = 2369;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 ";
			nameSpottoOut = "PANTONE v5 D65, 10° (M0)";
			document.converter.RefWhite.selectedIndex = 5;
			break;
		case 24:	// PANTONE Metallic D50 2° M2
			VR = 24;
			VRI = 655;
			VRP = "PANTONE Metallic ";
			VRPp = "PANTONE Metallic (M2)";
			nameSpottoOut = "PANTONE Metallic D50, 2° (M2)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 25:	// PANTONE Metallic D50 10° M2
			VR = 25;
			VRI = 655;
			VRP = "PANTONE Metallic ";
			VRPp = "PANTONE Metallic  (M2)";
			nameSpottoOut = "PANTONE Metallic D50, 10° (M2)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
		case 26:	// PANTONE v5 Uncoated D50 2° M2
			VR = 26;
			VRI = 2396;
			VRP = "PANTONE v5 ";
			VRPp = "PANTONE v5 U (M2)";
			nameSpottoOut = "PANTONE v5 Uncoated D50, 2° (M2)";
			document.converter.RefWhite.selectedIndex = 3;
			break;
	}
}

function Lab2PantonePlus(L,a,b) {
	var deltaE = [];
	for (var i=0; i<VRI; i++) {
		deltaE[i] = Math.sqrt(Math.pow((L-psp[VR][i][1]),2)+Math.pow((a-psp[VR][i][2]),2)+Math.pow((b-psp[VR][i][3]),2)); // dE 1976 high speed
	}
	var delta = 1000.0;
	var deltaNum = 0;
	for (var i=0; i<VRI; i++) {
		if (deltaE[i] < delta) {
			delta = deltaE[i];
			deltaNum = i;
		}
	}
	PantoneName = psp[VR][deltaNum][0];
	if (VR < 8 || VR > 18) {
	CII = "CII "+psp[VR][deltaNum][4];
	} else {
		CII = "CII";
	}
	document.converter.Pantone_Name.value = VRP+PantoneName;
	document.converter.PantoneCII.value = CII;
	document.converter.delta.value = "ΔE "+delta.toFixed(1);
	if (VR == 18) {
	document.converter.delta.value = "ΔE 0.0";
	}
}


function PantonePlus2Lab(theForm) {
	var InkName = theForm.Pantone_Name.value;
	var AlertName = InkName;
	var InkNameString = InkName.toString();
	var InkNameUpper = InkNameString.toUpperCase();
		if (VR < 8 || VR > 18) {
	InkNameUpper = InkNameUpper.replace("PANTONE Metallic ","");
	InkNameUpper = InkNameUpper.replace("C","####");
	InkNameUpper = InkNameUpper.replace("С","####");
	InkNameUpper = InkNameUpper.replace("\t"," ");
	InkNameUpper = InkNameUpper.replace("PANTONE V4 ","");
	InkNameUpper = InkNameUpper.replace("PANTONE V5 ","");
	InkNameUpper = InkNameUpper.replace("PANTONE® ","");
	InkNameUpper = InkNameUpper.replace("PANTONE+ ","");
	InkNameUpper = InkNameUpper.replace("PANTONE ","");
	InkNameUpper = InkNameUpper.replace("PANTON ","");
	InkNameUpper = InkNameUpper.replace(" GOEGUIDE ","");
	InkNameUpper = InkNameUpper.replace("GOEGUIDE ","");
	InkNameUpper = InkNameUpper.replace(" GOE GUIDE ","");
	InkNameUpper = InkNameUpper.replace("GOE GUIDE ","");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper+=" C";
	InkNameUpper = InkNameUpper.replace("#### C"," C");
	InkNameUpper = InkNameUpper.replace("####"," C");
	InkNameUpper = InkNameUpper.replace("  "," "); 
	InkNameUpper = InkNameUpper.replace("BLA CK","BLACK");
	InkNameUpper = InkNameUpper.replace(" C C"," C");
	InkNameUpper = InkNameUpper.replace("METALLI C ","");
	if (VR == 26) { //Uncoated
	InkNameUpper = InkNameUpper.replace("U","####");
		InkNameUpper+=" U";
	InkNameUpper = InkNameUpper.replace("#### U"," U");
	InkNameUpper = InkNameUpper.replace("####"," U");
	InkNameUpper = InkNameUpper.replace("  "," "); 
	InkNameUpper = InkNameUpper.replace(" U C U"," U"); 
				} //END Uncoated
	} // END if (VR < 8 || VR > 18)
	else {
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper = InkNameUpper.replace("RAL Classic ","");
	InkNameUpper = InkNameUpper.replace("RAL Design ","");
	InkNameUpper = InkNameUpper.replace("RAL Effect ","");
	InkNameUpper = InkNameUpper.replace("RAL ","");
	InkNameUpper = InkNameUpper.replace("RAL","");
	InkNameUpper = InkNameUpper.replace("NCS ","");
	InkNameUpper = InkNameUpper.replace("NCS","");
	InkNameUpper = InkNameUpper.replace("DIN ","");
	InkNameUpper = InkNameUpper.replace("DIN","");
	}

	var NameNum = -1;
	for (var i=0; i<VRI; i++) {
		if (InkNameUpper == psp[VR][i][0].toUpperCase()) {
			NameNum = i;
		}
	}
	if (NameNum == -1) {
		var pt = confirm("В базі "+VRP+"із "+VRI+" не знайдено такої фарби \nз назвою "+AlertName+". \n\nПошук та генерація кольору фарби \nіз  набору пантонника \nдоступно на ресурсі \nhttps://48.22web.org/pantone/\n\nПерейти за посиланням \nгенерації кольору фарби.");
		if (pt == true) {window.open('https://48.22web.org/pantone/', '_blank');}
	} else {
	Lab.L = psp[VR][NameNum][1];
	Lab.a = psp[VR][NameNum][2];
	Lab.b = psp[VR][NameNum][3];
	CII = psp[VR][NameNum][4];
	PantoneName = psp[VR][NameNum][0];
	}
	document.converter.Pantone_Name.value = VRP+PantoneName;
	if (VR < 8) {
	document.converter.PantoneCII.value = "CII "+CII;
	} else {
	document.converter.PantoneCII.value = "CII";
	}
	document.converter.delta.value = "ΔE 0.0";
}

function HVS_clipping() {
	if (document.converter.clipping.checked == true) {
		clipping_selector = true;
		//Slider2LCHab(document.converter); //sliderchange();
	}
	else {
		clipping_selector = false;
		//Slider2LCHab(document.converter); //sliderchange();
	}
}

function RGB_mapping() {
	if (document.converter.mapping.checked == true) {
		mapping_selector = true;
	}
	else {
		mapping_selector = false;
	}
	
		if (labPrioritet == true) {
		ButtonLCHab(document.converter); //sliderchange();
		} else {
		ButtonCMYK(document.converter);
		}
}

function clip_map_max() {
	ugolH = LCHab.H;
	document.converter.gamut_clip_L.value = HVS_surfaceL[ugolH.toFixed(0)];
	document.converter.gamut_clip_C.value = HVS_surfaceC[ugolH.toFixed(0)];
	edgeL = cubicspline(RGB_surfaceh[surface],RGB_surfaceL[surface],[ugolH]);
	edgeC = cubicspline(RGB_surfaceh[surface],RGB_surfaceC[surface],[ugolH]);
	document.converter.gamut_map_L.value = edgeL[0].toFixed(1)
	document.converter.gamut_map_C.value = edgeC[0].toFixed(1)
}

/*function defineMappingCoordinatesFromSlider() { // x1 != 0 для плавности перехода по слайдеру
	if(gamut_error == 1 && mapping_selector == true) {
x1 = fixLCHabC;
y1 = fixLCHabL;

x2 = edgeC[0];
y2 = edgeL[0];

x3 = LCHab.C;
y3 = LCHab.L;
	} 
	if(gamut_error == 0) { // gamut_error = false
	fixLCHabC = LCHab.C+0.2; // + погрешность слайдера / 2
	fixLCHabL = LCHab.L;
}	
}*/

function defineMappingCoordinatesFromButton() {
	if(gamut_error == 1 && mapping_selector == true) {
x1 = 0.0;
if (LCHab.L <= edgeL[0]) {
y1 = 0.0;
} else {
y1 = 100.0;
}	

x2 = edgeC[0];
y2 = edgeL[0];

x3 = LCHab.C;
y3 = LCHab.L;
	}
}

function gamutmappingTaylorTwoDimensional(gmc) {
	
	if (plusLCHabL.length > 4) {
	plusLCHabL.splice(4,1);
	plusLCHabC.splice(4,1);
}

if(gamut_error == 1 && mapping_selector == true) { //two-dimensional space: Taylor 

fixLCHabC = LCHab.C;
fixLCHabL = LCHab.L;

// координаты пересечения перпендикуляра с отрезком LCnull-LCmax:
var x4=((x2-x1)*(y2-y1)*(y3-y1)+x1*Math.pow(y2-y1, 2)+x3*Math.pow(x2-x1, 2))/(Math.pow(y2-y1, 2)+Math.pow(x2-x1, 2));
var y4=(y2-y1)*(x4-x1)/(x2-x1)+y1;

if(x4 > edgeC[0]) {x4 = edgeC[0];}

LCHab.L = y4;
LCHab.C = x4;
plusLCHabL.unshift(y4);
plusLCHabC.unshift(x4);

//alert("L "+LCHab.L.toFixed(2)+" C "+LCHab.C.toFixed(2));

	if(gmc == 0) {
LCHab2Lab();
} else {
	CMYK2Lab();
}
Lab2XYZ();
XYZ2RGB();
secondbgc1 = true;
bgcolor1();
document.converter.hexcode.value = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];

LCHab.L = fixLCHabL;
LCHab.C = fixLCHabC;
	LCHab2Lab();
	Lab2XYZ();
	if (gmc == 0){
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	}
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	XYZ2RGB();
	FillXYZCells(document.converter);
	FillxyYCells(document.converter);
	FillLabCells(document.converter);
	//FillRGBCells(theForm);
	FillCMYKCells(document.converter);
	//bgcolor(theForm);
	//bgcolor1();
	//clip_map_max();
	//defineMappingCoordinatesFromButton(); //

//document.converter.hexcode.value = LCHab.L.toFixed(2)+"  "+LCHab.C.toFixed(2)+"  "+ugolH.toFixed(2); // отладка
} else {
plusLCHabL.unshift(LCHab.L);
plusLCHabC.unshift(LCHab.C);
}
}

function Determinant3x3(m)
{
	var det = m.m00 * (m.m22 * m.m11 - m.m21 * m.m12) -
			  m.m10 * (m.m22 * m.m01 - m.m21 * m.m02) +
			  m.m20 * (m.m12 * m.m01 - m.m11 * m.m02);
	
	return (det);
}

function MtxInvert3x3(m, i)
{
	var scale = 1.0 / Determinant3x3(m);
	
	i.m00 =  scale * (m.m22 * m.m11 - m.m21 * m.m12);
	i.m01 = -scale * (m.m22 * m.m01 - m.m21 * m.m02);
	i.m02 =  scale * (m.m12 * m.m01 - m.m11 * m.m02);
	
	i.m10 = -scale * (m.m22 * m.m10 - m.m20 * m.m12);
	i.m11 =  scale * (m.m22 * m.m00 - m.m20 * m.m02);
	i.m12 = -scale * (m.m12 * m.m00 - m.m10 * m.m02);
	
	i.m20 =  scale * (m.m21 * m.m10 - m.m20 * m.m11);
	i.m21 = -scale * (m.m21 * m.m00 - m.m20 * m.m01);
	i.m22 =  scale * (m.m11 * m.m00 - m.m10 * m.m01);
}

function MtxTranspose3x3(m)
{
	var v = m.m01;
	m.m01 = m.m10;
	m.m10 = v;
	
	v = m.m02;
	m.m02 = m.m20;
	m.m20 = v;
	
	v = m.m12;
	m.m12 = m.m21;
	m.m21 = v;
}

function ClearForm(theForm)
{
	theForm.XYZ_X.value = "";
	theForm.XYZ_Y.value = "";
	theForm.XYZ_Z.value = "";
	
	theForm.xyY_x.value = "";
	theForm.xyY_y.value = "";
	theForm.xyY_Y.value = "";
	
	theForm.Lab_L.value = "";
	theForm.Lab_a.value = "";
	theForm.Lab_b.value = "";
	
	theForm.LCHab_L.value = "";
	theForm.LCHab_C.value = "";
	theForm.LCHab_H.value = "";
	
	theForm.Luv_L.value = "";
	theForm.Luv_u.value = "";
	theForm.Luv_v.value = "";
	
	theForm.LCHuv_L.value = "";
	theForm.LCHuv_C.value = "";
	theForm.LCHuv_H.value = "";
	
	theForm.RGB_R.value = "";
	theForm.RGB_G.value = "";
	theForm.RGB_B.value = "";
	
	theForm.K.value = "";
	theForm.DomWavelength.value = "";
	
	theForm.hexcode.value = "";
	theForm.gamut_alert.value = "";
	theForm.refWcctF.value = " 6500";
	theForm.RefWhite.selectedIndex = 11;
}

function ButtonXYZ(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetXYZ(theForm);
	PantoneSelect(theForm);
	XYZ2xyY();
	XYZ2Lab();
	dEmem();
	Lab2LCHab();
	//HVSclipping();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2RGB();
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange();
	TDplus();
	hyperlink();
}

function ButtonxyY(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetxyY(theForm);
	PantoneSelect(theForm);
	xyY2XYZ();
	XYZ2Lab();
	dEmem();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2RGB();
	FillXYZCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange();
	TDplus();
	hyperlink();
}

function ButtonLab(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLab(theForm);
	dEmem();
	PantoneSelect(theForm);
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	Lab2LCHab();
	//HVSclipping();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange();
	TDplus();
	hyperlink();
	//ButtonRGB(theForm);
}

function ButtonLCHab(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLCHab(theForm);
	PantoneSelect(theForm);
	LCHab2Lab();
	dEmem();
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange(); // in html! sliderchange();
	TDplus();
	hyperlink();
}

function Slider2LCHab(theForm) // copy of ButtonLCHab but defineMappingCoordinatesFromSlider
{
	labPrioritet = true;
	if (stooperSL == false) {
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLCHsliderrange(theForm);
	GetLCHab(theForm);
		alertNullNull();
	HVSclipping();
	PantoneSelect(theForm);
	LCHab2Lab();
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton(); //
	gamutmappingTaylorTwoDimensional(0);
	hyperlink();
	}
}

function ButtonRGB(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetRGB(theForm);
	PantoneSelect(theForm);
	RGB2XYZ();
	XYZ2xyY();
	XYZ2Lab();
	dEmem();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange();
	TDplus();
	hyperlink();
}

function ButtonHEX(theForm) {
	labPrioritet = true;
	var allhexL = theForm.hexcode.value;
	var allhex = allhexL.toUpperCase();
	var rhex = allhex.slice(1,3);
	var ghex = allhex.slice(3,5);
	var bhex = allhex.slice(5,7);
	
	for (var i=0; i<hexarray.length; i++) {
		if (hexarray[i] == rhex) {
			RGB.R = i;
		}
		if (hexarray[i] == ghex) {
			RGB.G = i;
		}
		if (hexarray[i] == bhex) {
			RGB.B = i;
		}
	}

	if(theForm.ScaleRGB.checked == true) {scale = 1.0;}
	else { scale = 1.0 / 255.0; }
	//var digits = (ScaleRGB == false) ? 4 : digitinkR;
	var digits = (ScaleRGB == false) ? 5 : 0;
	
	theForm.RGB_R.value = (RGB.R * scale).toFixed(digits);
	theForm.RGB_G.value = (RGB.G * scale).toFixed(digits);
	theForm.RGB_B.value = (RGB.B * scale).toFixed(digits);

	ButtonRGB(theForm);
	plusTD = true;
	hyperlink();
}

function ButtonCMYK(theForm)
{
	labPrioritet = false;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetCMYK(theForm);
	PantoneSelect(theForm);
	CMYK2Lab();
	Lab2XYZ();
	AbsoluteCMYK2XYZcalc();
		dEmem();
	Lab2LCHab();
	XYZ2xyY();
	XYZ2RGB();
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
		theForm.CMYK_C.style.color = 'black';
		theForm.CMYK_M.style.color = 'black';
		theForm.CMYK_Y.style.color = 'black';
		theForm.CMYK_K.style.color = 'black';
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(1); //this 1 stopping Lab2CMYK call from mapping 2022_10_13
	sliderchange();
	TDplus();
	//alert(CMYK.C); 97
	hyperlinkCMYK(); //2024_04
}

function ButtonPantonePlus2Lab(theForm)
{
	labPrioritet = true;
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
		//GetRGB(theForm);
	PantoneSelect(theForm);
	PantonePlus2Lab(theForm);
	//dEmem(); //кто-то уже вызывает, чтобы не было 2 вызовов
	Lab2XYZ();
	XYZ2xyY();
	XYZ2RGB();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
		//FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	sliderchange();
	TDplus();
	hyperlink();
	
	ButtonRGB(theForm); //2022_03_16 пока так исправим глюк с маджентой 100-0
}

function sliderchange() {
	//GetLCHab(document.converter);
	/*stooperSL = true;
	mysl1.setValue((LCHab.L*5).toFixed(0));
	stooperSL = true;
	mysl2.setValue((LCHab.C*5).toFixed(0));
	stooperSL = true;
	mysl3.setValue((LCHab.H*5).toFixed(0));
	stooperSL = false;
	*/
	stooperSL = true;
	document.converter.ranL.value = LCHab.L;
	document.converter.ranC.value = LCHab.C;
	document.converter.ranh.value = LCHab.H;
	SliderColorLight();
	stooperSL = false;
}

function FillCMYKCells(theForm) {
	// 2020_04 CMYK
		theForm.CMYK_C.style.color = 'black';
		theForm.CMYK_M.style.color = 'black';
		theForm.CMYK_Y.style.color = 'black';
		theForm.CMYK_K.style.color = 'black';
		outCmykGamut = "";
	var pinL = parseInt(LCHab.L);
	var pinC = parseInt(LCHab.C-1);
	var pinH = parseInt(LCHab.H);
	
	if (pinC > CMYK_LCh_surfaceC[FRP][pinH][pinL] && labPrioritet == true) {
		theForm.CMYK_C.style.color = 'red';
		theForm.CMYK_M.style.color = 'red';
		theForm.CMYK_Y.style.color = 'red';
		theForm.CMYK_K.style.color = 'red';
		outCmykGamut = "&emsp;&emsp;(найближча за кольором суміш фарб за межами гамутного відтінку)";
	} // 2020_04 CMYK
	
	theForm.CMYK_C.value = CMYK.C.toFixed(digitink);
	theForm.CMYK_M.value = CMYK.M.toFixed(digitink);
	theForm.CMYK_Y.value = CMYK.Y.toFixed(digitink);
	theForm.CMYK_K.value = CMYK.K.toFixed(digitink);
}

function FillLabCells(theForm)
{
	theForm.Lab_L.value = parseFloat(Lab.L.toFixed(2));
	theForm.Lab_a.value = parseFloat(Lab.a.toFixed(2));
	theForm.Lab_b.value = parseFloat(Lab.b.toFixed(2));
	hyperlink();
}

function FillLCHabCells(theForm)
{
	theForm.LCHab_L.value = parseFloat(LCHab.L.toFixed(2));
	theForm.LCHab_C.value = parseFloat(LCHab.C.toFixed(2));
	theForm.LCHab_H.value = parseFloat(LCHab.H.toFixed(2));
}

function FillXYZCells(theForm)
{
	var scale = (ScaleXYZ == false) ? 1.0 : 100.0;
	var digits = (ScaleXYZ == false) ? 4 : 3;
	theForm.XYZ_X.value = parseFloat((scale * XYZ.X).toFixed(digits));
	theForm.XYZ_Y.value = parseFloat((scale * XYZ.Y).toFixed(digits));
	theForm.XYZ_Z.value = parseFloat((scale * XYZ.Z).toFixed(digits));
}

function FillxyYCells(theForm)
{
	var scale = (ScaleY == false) ? 1.0 : 100.0;
	var digits = (ScaleY == false) ? 4 : 3;
	theForm.xyY_x.value = parseFloat(xyY.x.toFixed(4));
	theForm.xyY_y.value = parseFloat(xyY.y.toFixed(4));
	theForm.xyY_Y.value = parseFloat((scale * xyY.Y).toFixed(digits));
}

function FillRGBCells(theForm)
{
	var scale = (ScaleRGB == false) ? 1.0 : 255.0;
	var digits = (ScaleRGB == false) ? 5 : digitinkR;
	theForm.RGB_R.value = parseFloat((scale * RGB.R).toFixed(digits));
	theForm.RGB_G.value = parseFloat((scale * RGB.G).toFixed(digits));
	theForm.RGB_B.value = parseFloat((scale * RGB.B).toFixed(digits));
}

function RGBModelChange(theForm)
{
	GetRGBModel(theForm);
	theForm.Gamma.selectedIndex = GammaRGBIndex;
	//ButtonLCHab(theForm);
}

function GetXYZ(theForm)
{
	var scale = (ScaleXYZ == false) ? 1.0 : 0.01;
	XYZ.X = scale * GetNumber(theForm.XYZ_X.value);
	XYZ.Y = scale * GetNumber(theForm.XYZ_Y.value);
	XYZ.Z = scale * GetNumber(theForm.XYZ_Z.value);
	
	XYZ.X = (XYZ.X < 0.0) ? 0.0 : XYZ.X;
	XYZ.Y = (XYZ.Y < 0.0) ? 0.0 : XYZ.Y;
	XYZ.Z = (XYZ.Z < 0.0) ? 0.0 : XYZ.Z;
}

function GetxyY(theForm)
{
	var scale = (ScaleY == false) ? 1.0 : 0.01;
	xyY.x = GetNumber(theForm.xyY_x.value);
	xyY.y = GetNumber(theForm.xyY_y.value);
	xyY.Y = scale * GetNumber(theForm.xyY_Y.value);
	
	xyY.Y = (xyY.Y < 0.0) ? 0.0 : xyY.Y;
}

function GetLab(theForm)
{
	Lab.L = GetNumber(theForm.Lab_L.value);
	Lab.a = GetNumber(theForm.Lab_a.value);
	Lab.b = GetNumber(theForm.Lab_b.value);
	
	Lab.L = (Lab.L < 0.0) ? 0.0 : (Lab.L > 100.0) ? 100.0 : Lab.L;
}

function GetLCHsliderrange(theForm) {
	document.converter.LCHab_L.value = GetNumber(document.converter.ranL.value);
	document.converter.LCHab_C.value = GetNumber(document.converter.ranC.value);
	document.converter.LCHab_H.value = GetNumber(document.converter.ranh.value);
}

function GetLCHab(theForm)
{
	LCHab.L = GetNumber(theForm.LCHab_L.value);
	LCHab.C = GetNumber(theForm.LCHab_C.value);
	LCHab.H = GetNumber(theForm.LCHab_H.value);
	
	LCHab.L = (LCHab.L < 0.0) ? 0.0 : (LCHab.L > 100.0) ? 100.0 : LCHab.L;
	LCHab.C = (LCHab.C < 0.0) ? 0.0 : LCHab.C;
	while (LCHab.H < 0.0)
	{
		LCHab.H += 360.0;
	}
	while (LCHab.H > 360.0)
	{
		LCHab.H -= 360.0;
	}
	
	clip_map_max();
}

function HVSclipping() {
	//2018.10.16 HVS Clipping
	if (clipping_selector == true) {
			//if (LCHab.L > 0.0) {
			//	if (LCHab.C > 0.0) {

		if (document.getElementById('GAcldiv').getElementsByTagName('div').length > 0){
	document.getElementById('GAcldiv').removeChild(document.getElementById('GAcldiv').getElementsByTagName('div')[0]);
	}
	pintL = LCHab.L.toFixed(0);
	pintC = LCHab.C.toFixed(0);
	pintH = LCHab.H.toFixed(0);
	
	LCHabLtemp = HVS_LCh_surfaceL[pintL];
	LCHabCtemp = HVS_LCh_surfaceC[pintH][pintL];
	LCHabHtemp = pintH;
	
	if (pintC <= HVS_LCh_surfaceC[pintH][pintL]) {
		LCHabLtemp = LCHab.L;
		LCHabCtemp = LCHab.C;
		LCHabHtemp = LCHab.H;
		outOfC = false;
		var GAcldiv = document.createElement('div'); 
GAcldiv.innerHTML = 'To <a href="https://color.byethost3.com/" target="_blank" class="linkst">HVS</a> Gamut clipping:';
document.getElementById('GAcldiv').appendChild(GAcldiv);
	}
	else {
		
		
		LCHab.C = LCHabCtemp;
		document.converter.LCHab_C.value = LCHab.C.toFixed(1);
		outOfC = true;
		var GAcldiv = document.createElement('div'); 
GAcldiv.innerHTML = 'To <a href="https://color.byethost3.com/" target="_blank" class="linkst">HVS</a> <span style="color: red;">Gamut clipping</span>:';
document.getElementById('GAcldiv').appendChild(GAcldiv);
	}
	
	for (var i = 0; i<101; i++) {
		HVS_LCh_surfaceC[pintH][pintL] == HVS_LCh_surfaceC[pintH][i];
		numberL = i;
	}
	
	if (pintL <= HVS_LCh_surfaceL[numberL] && outOfC == true) {
		LCHab.L = LCHabLtemp;
		document.converter.LCHab_L.value = LCHab.L.toFixed(1);
	}
	} //end 2018.10.16 HVS Clipping
}

function GetRGB(theForm)
{
	var scale = (ScaleRGB == false) ? 1.0 : (1.0 / 255.0);
	RGB.R = scale * GetNumber(theForm.RGB_R.value);
	RGB.G = scale * GetNumber(theForm.RGB_G.value);
	RGB.B = scale * GetNumber(theForm.RGB_B.value);
}

function GetCMYK(theForm)
{
	CMYK.C = GetNumber(theForm.CMYK_C.value);
	CMYK.M = GetNumber(theForm.CMYK_M.value);
	CMYK.Y = GetNumber(theForm.CMYK_Y.value);
	CMYK.K = GetNumber(theForm.CMYK_K.value);
}


function GetCCT(theForm)
{
	CCT = GetNumber(theForm.K.value);
}

function GetRefWhiteCCT(theForm)
{
	refWcct = GetNumber(theForm.refWcctF.value);
}

function GetRefWhite(theForm)
{
	RefWhite.Y = 1.0;
	//document.converter.refWcctF.value = "";
	switch (theForm.RefWhite.selectedIndex)
	{
		case 0:	// A (ASTM E308-01)
			RefWhite.X = 1.09850;
			RefWhite.Z = 0.35585;
			document.converter.refWcctF.value = " 2856K";
			refWhitetoOut = "Illuminant A (ASTM E308-01)";
			break;
		case 1:	// B (Wyszecki & Stiles, p. 769)
			RefWhite.X = 0.99072;
			RefWhite.Z = 0.85223;
			document.converter.refWcctF.value = " 4874K";
			refWhitetoOut = "Illuminant B (Wyszecki & Stiles, p. 769)";
			break;
		case 2:	// C (ASTM E308-01)
			RefWhite.X = 0.98074;
			RefWhite.Z = 1.18232;
			document.converter.refWcctF.value = " 6775K";
			refWhitetoOut = "Illuminant C (ASTM E308-01)";
			break;
		case 3:	// D50 (ASTM E308-01)
			ChangeIllumInk_D65toD50(theForm); // change Pantone Illum
			RefWhite.X = 0.96422;
			RefWhite.Z = 0.82521;
			document.converter.refWcctF.value = " 5003K";
			refWhitetoOut = "Illuminant D50 (ASTM E308-01)";
			break;
		case 4:	// D55 (ASTM E308-01)
			RefWhite.X = 0.95682;
			RefWhite.Z = 0.92149;
			document.converter.refWcctF.value = " 5500K";
			refWhitetoOut = "Illuminant D55 (ASTM E308-01)";
			break;
		case 5:	// D65 (ASTM E308-01)
			ChangeIllumInk_D50toD65(theForm); // change Pantone Illum
			RefWhite.X = 0.95047;
			RefWhite.Z = 1.08883;
			document.converter.refWcctF.value = " 6504K";
			refWhitetoOut = "Illuminant D65 (ASTM E308-01)";
			break;
		case 6:	// D75 (ASTM E308-01)
			RefWhite.X = 0.94972;
			RefWhite.Z = 1.22638;
			document.converter.refWcctF.value = " 7500K";
			refWhitetoOut = "Illuminant D75 (ASTM E308-01)";
			break;
		default:
		case 7:	// E (ASTM E308-01)
			RefWhite.X = 1.00000;
			RefWhite.Z = 1.00000;
			document.converter.refWcctF.value = " 5455K";
			refWhitetoOut = "Illuminant E (ASTM E308-01)";
			break;
		case 8:	// F2 (ASTM E308-01)
			RefWhite.X = 0.99186;
			RefWhite.Z = 0.67393;
			document.converter.refWcctF.value = " 4224K";g
			refWhitetoOut = "Illuminant F2 (ASTM E308-01)";
			break;
		case 9:	// F7 (ASTM E308-01)
			RefWhite.X = 0.95041;
			RefWhite.Z = 1.08747;
			document.converter.refWcctF.value = " 6491K";
			refWhitetoOut = "Illuminant F7 (ASTM E308-01)";
			break;
		case 10:	// F11 (ASTM E308-01)
			RefWhite.X = 1.00962;
			RefWhite.Z = 0.64350;
			document.converter.refWcctF.value = " 4000K";
			refWhitetoOut = "Illuminant F11 (ASTM E308-01)";
			break;
		case 11:	// Plank's blackbody
			GetRefWhiteCCT(theForm);
			CCT2refWhite();
			refWhitetoOut = "Plank's blackbody " + refWcct +"K";
			break;
	}
	if (refWPriority == true) {
	if (theForm.RefWhite.selectedIndex != 3 && theForm.RefWhite.selectedIndex != 5) {
		document.converter.Veer.value = 18; // nothing
	}}
}

function ChangeIllumInk_D50toD65(theForm) {
	if (refWPriority == true) {
	if (theForm.Veer.value == 0) {theForm.Veer.value = 4;}
	if (theForm.Veer.value == 1) {theForm.Veer.value = 5;}
	if (theForm.Veer.value == 2) {theForm.Veer.value = 6;}
	if (theForm.Veer.value == 3) {theForm.Veer.value = 7;}
	if (theForm.Veer.value == 13) {theForm.Veer.value = 8;}
	if (theForm.Veer.value == 14) {theForm.Veer.value = 9;}
	if (theForm.Veer.value == 15) {theForm.Veer.value = 10;}
	if (theForm.Veer.value == 16) {theForm.Veer.value = 11;}
	if (theForm.Veer.value == 17) {theForm.Veer.value = 12;}
	if (theForm.Veer.value == 19) {theForm.Veer.value = 22;} //M2
	if (theForm.Veer.value == 20) {theForm.Veer.value = 22;} //M0
	if (theForm.Veer.value == 21) {theForm.Veer.value = 23;}
	}
}

function ChangeIllumInk_D65toD50(theForm) {
	if (refWPriority == true) {
	if (theForm.Veer.value == 4) {theForm.Veer.value = 0;}
	if (theForm.Veer.value == 5) {theForm.Veer.value = 1;}
	if (theForm.Veer.value == 6) {theForm.Veer.value = 2;}
	if (theForm.Veer.value == 7) {theForm.Veer.value = 3;}
	if (theForm.Veer.value == 8) {theForm.Veer.value = 13;}
	if (theForm.Veer.value == 9) {theForm.Veer.value = 14;}
	if (theForm.Veer.value == 10) {theForm.Veer.value = 15;}
	if (theForm.Veer.value == 11) {theForm.Veer.value = 16;}
	if (theForm.Veer.value == 12) {theForm.Veer.value = 17;}
	if (theForm.Veer.value == 22) {theForm.Veer.value = 20;} //M0
	if (theForm.Veer.value == 23) {theForm.Veer.value = 21;}
	}
}

function GetRGBModel(theForm)
{
	if (document.converter.predefRGB.checked == true){
		predefCSSv4 = true;
	} else {
		predefCSSv4 = false;
	}
	
	model_to_output_ar = new Array("Adobe RGB(1998)","Apple RGB","Best RGB","Beta RGB","Bruce RGB","CIE RGB","ColorMatch RGB","Don RGB 4","ECI RGB v2","Ekta Space PS5","NTSC RGB","PAL/SECAM RGB","ProPhoto RGB","SMPTE-C RGB","sRGB","Wide Gamut RGB","DCI-P3-D65 RGB","Display-P3 RGB","Rec. 2020 (BT.2020)");
	model_to_output = model_to_output_ar[theForm.RGBModel.selectedIndex];
	
	RefWhiteRGB.Y = 1.00000;
	var xr, yr, xg, yg, xb, yb;
	
	switch (theForm.RGBModel.selectedIndex)
	{
		case 0:	/* Adobe RGB (1998) */
			xr = 0.64;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 3;
			document.converter.predefRGB.disabled = false;
			surface = 0;
			break;
		case 1:	/* AppleRGB */
			xr = 0.625;
			yr = 0.340;
			xg = 0.280;
			yg = 0.595;
			xb = 0.155;
			yb = 0.070;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 1;
			break;
		case 2:	/* Best RGB */
			xr = 0.7347;
			yr = 0.2653;
			xg = 0.2150;
			yg = 0.7750;
			xb = 0.1300;
			yb = 0.0350;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 3:	/* Beta RGB */
			xr = 0.6888;
			yr = 0.3112;
			xg = 0.1986;
			yg = 0.7551;
			xb = 0.1265;
			yb = 0.0352;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 4:	/* Bruce RGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.28;
			yg = 0.65;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 5:	/* CIE RGB */
			xr = 0.735;
			yr = 0.265;
			xg = 0.274;
			yg = 0.717;
			xb = 0.167;
			yb = 0.009;
			
			RefWhiteRGB.X = 1.00000;
			RefWhiteRGB.Z = 1.00000;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 6:	/* ColorMatch RGB */
			xr = 0.630;
			yr = 0.340;
			xg = 0.295;
			yg = 0.605;
			xb = 0.150;
			yb = 0.075;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 2;
			break;
		case 7:	/* Don RGB 4 */
			xr = 0.696;
			yr = 0.300;
			xg = 0.215;
			yg = 0.765;
			xb = 0.130;
			yb = 0.035;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 8:	/* ECI RGB v2 */
			xr = 0.67;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.14;
			yb = 0.08;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  0.0;
			GammaRGBIndex = 4;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 9:	/* Ekta Space PS5 */
			xr = 0.695;
			yr = 0.305;
			xg = 0.260;
			yg = 0.700;
			xb = 0.110;
			yb = 0.005;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 10:	/* NTSC RGB */
			xr = 0.67;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.14;
			yb = 0.08;
			
			RefWhiteRGB.X = 0.98074;
			RefWhiteRGB.Z = 1.18232;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 11:	/* PAL/SECAM RGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.29;
			yg = 0.60;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 12:	/* ProPhoto RGB */
			xr = 0.7347;
			yr = 0.2653;
			xg = 0.1596;
			yg = 0.8404;
			xb = 0.0366;
			yb = 0.0001;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			predef = 4;
			document.converter.predefRGB.disabled = false;
			surface = 3;
			break;
		case 13:	/* SMPTE-C RGB */
			xr = 0.630;
			yr = 0.340;
			xg = 0.310;
			yg = 0.595;
			xb = 0.155;
			yb = 0.070;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 14:	/* sRGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.30;
			yg = 0.60;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB = -2.2;
			GammaRGBIndex = 3;
			predef = 0;
			document.converter.predefRGB.disabled = false;
			surface = 4;
			break;
		case 15:	/* Wide Gamut RGB */
			xr = 0.735;
			yr = 0.265;
			xg = 0.115;
			yg = 0.826;
			xb = 0.157;
			yb = 0.018;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 5;
			break;
		case 16:	/* DCI-P3-D65 ICC 2017.  -D50 to D65 WP chad Bradford Like Lindbloom!!! see DCI_sRGB_XYZ_CGATS.xls in Work RAL Fogra 2020. https://en.wikipedia.org/wiki/DCI-P3 */
			xr = 0.68;
			yr = 0.32;
			xg = 0.265;
			yg = 0.69;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB = 2.6;
			GammaRGBIndex = 5;
			predef = 1;
			document.converter.predefRGB.disabled = true;
			predefCSSv4 = false;
			surface = 6;
			break;
			
		case 17:	/* Display P3 (Apple) gamma sRGB Important!!! */
			xr = 0.68;
			yr = 0.32;
			xg = 0.265;
			yg = 0.69;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB = -2.2;
			GammaRGBIndex = 3;
			predef = 2;
			document.converter.predefRGB.disabled = false;
			surface = 6;
			break;
			
		case 18:	/* Rec. 2020 */
			xr = 0.708; //https://www.w3.org/TR/css-color-4/
			yr = 0.292;
			xg = 0.17;
			yg = 0.797;
			xb = 0.131;
			yb = 0.046;
			
			RefWhiteRGB.X = 0.95047; //D65
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB = 6.0;
			GammaRGBIndex = 6;
			predef = 5;
			document.converter.predefRGB.disabled = false;
			surface = 7;
			break;
			
	}
	
	var m = {m00:xr/yr, m01:xg/yg, m02:xb/yb, m10:1.0, m11:1.0, m12:1.0, m20:(1.0-xr-yr)/yr, m21:(1.0-xg-yg)/yg, m22:(1.0-xb-yb)/yb};
	var mi = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
	MtxInvert3x3(m, mi);
	
	var sr = RefWhiteRGB.X * mi.m00 + RefWhiteRGB.Y * mi.m01 + RefWhiteRGB.Z * mi.m02;
	var sg = RefWhiteRGB.X * mi.m10 + RefWhiteRGB.Y * mi.m11 + RefWhiteRGB.Z * mi.m12;
	var sb = RefWhiteRGB.X * mi.m20 + RefWhiteRGB.Y * mi.m21 + RefWhiteRGB.Z * mi.m22;
	
	MtxRGB2XYZ.m00 = sr * m.m00;
	MtxRGB2XYZ.m01 = sg * m.m01;
	MtxRGB2XYZ.m02 = sb * m.m02;
	MtxRGB2XYZ.m10 = sr * m.m10;
	MtxRGB2XYZ.m11 = sg * m.m11;
	MtxRGB2XYZ.m12 = sb * m.m12;
	MtxRGB2XYZ.m20 = sr * m.m20;
	MtxRGB2XYZ.m21 = sg * m.m21;
	MtxRGB2XYZ.m22 = sb * m.m22;
	
	MtxTranspose3x3(MtxRGB2XYZ);
	
	MtxInvert3x3(MtxRGB2XYZ, MtxXYZ2RGB);
}

function GetGamma(theForm)
{
	switch (theForm.Gamma.selectedIndex)
	{
		case 0:	/* 1.0 */
			Gamma = 1.0;
			break;
		case 1:	/* 1.8 */
			Gamma = 1.8;
			break;
		case 2:	/* 2.2 */
			Gamma = 2.2;
			break;
		case 3:	/* sRGB */
			Gamma = -2.2
			break;
		case 4: /* L* */
			Gamma = 0.0;
			break;
		case 5: /* 2.6 */
			Gamma = 2.6;
			break;
		case 6:	/* rec. 2020 */
			Gamma = 6.0;
			break;
	}
}

function GetAdaptation(theForm)
{
	AdaptationMethod = theForm.Adaptation.selectedIndex;
	switch (AdaptationMethod)
	{
		case 0:	/* Bradford */
			MtxAdaptMa.m00 =  0.8951;
			MtxAdaptMa.m01 = -0.7502;
			MtxAdaptMa.m02 =  0.0389;
			MtxAdaptMa.m10 =  0.2664;
			MtxAdaptMa.m11 =  1.7135;
			MtxAdaptMa.m12 = -0.0685;
			MtxAdaptMa.m20 = -0.1614;
			MtxAdaptMa.m21 =  0.0367;
			MtxAdaptMa.m22 =  1.0296;
			
			MtxInvert3x3(MtxAdaptMa, MtxAdaptMaI);
			
			chadtoOut = "Bradford";
			break;
		case 1:	/* von Kries */
			MtxAdaptMa.m00 =  0.40024;
			MtxAdaptMa.m01 = -0.22630;
			MtxAdaptMa.m02 =  0.00000;
			MtxAdaptMa.m10 =  0.70760;
			MtxAdaptMa.m11 =  1.16532;
			MtxAdaptMa.m12 =  0.00000;
			MtxAdaptMa.m20 = -0.08081;
			MtxAdaptMa.m21 =  0.04570;
			MtxAdaptMa.m22 =  0.91822;
			
			MtxInvert3x3(MtxAdaptMa, MtxAdaptMaI);
			
			chadtoOut = "Von Kries";
			break;
		case 2:	/* XYZ Scaling */
		MtxAdaptMa.m00 = 1.0;
			MtxAdaptMa.m01 = 0.0;
			MtxAdaptMa.m02 = 0.0;
			MtxAdaptMa.m10 = 0.0;
			MtxAdaptMa.m11 = 1.0;
			MtxAdaptMa.m12 = 0.0;
			MtxAdaptMa.m20 = 0.0;
			MtxAdaptMa.m21 = 0.0;
			MtxAdaptMa.m22 = 1.0;
			
			MtxAdaptMaI.m00 = 1.0;
			MtxAdaptMaI.m01 = 0.0;
			MtxAdaptMaI.m02 = 0.0;
			MtxAdaptMaI.m10 = 0.0;
			MtxAdaptMaI.m11 = 1.0;
			MtxAdaptMaI.m12 = 0.0;
			MtxAdaptMaI.m20 = 0.0;
			MtxAdaptMaI.m21 = 0.0;
			MtxAdaptMaI.m22 = 1.0;
			
			chadtoOut = "XYZ Scaling";
			break;
		case 3:	/* CAT02 */
			MtxAdaptMa = {m00:0.7328, m01:-0.7036, m02:0.0030, m10:0.4296, m11:1.6975, m12:0.0136, m20:-0.1624, m21:0.0061, m22:0.9834};
			MtxAdaptMaI = {m00:1.096124, m01:0.454369, m02:-0.009628, m10:-0.278869, m11:0.473533, m12:-0.005698, m20:0.182745, m21:0.072098, m22:1.015326};
			
			chadtoOut = "CIECAT02";
			break;
		case 4:	/* Sharp */
			MtxAdaptMa = {m00:1.2694, m01:-0.8364, m02:0.0297, m10:-0.0988, m11:1.8006, m12:-0.0315, m20:-0.1706, m21:0.0357, m22:1.0018};
			MtxAdaptMaI = {m00:0.8156333, m01:0.3791144, m02:-0.0122601, m10:0.0471548, m11:0.5769424, m12:0.0167431, m20:0.1372166, m21:0.0440009, m22:0.9955188};
			
			chadtoOut = "Sharp";
			break;
		case 5:	/* CMCCAT2000 */
			MtxAdaptMa = {m00:0.7982, m01:-0.5918, m02:0.0008, m10:0.3389, m11:1.5512, m12:0.0239, m20:-0.1371, m21:0.0406, m22:0.9753}; //0.239 wrong
			MtxAdaptMaI = {m00:1.07645, m01:0.4109643, m02:-0.0109538, m10:-0.2376624, m11:0.5543418, m12:-0.0133894, m20:0.1612123, m21:0.0346939, m22:1.0243431};
			
			chadtoOut = "CMCCAT2000";
			break;
		case 6:	/* None */
			MtxAdaptMa.m00 = 1.0;
			MtxAdaptMa.m01 = 0.0;
			MtxAdaptMa.m02 = 0.0;
			MtxAdaptMa.m10 = 0.0;
			MtxAdaptMa.m11 = 1.0;
			MtxAdaptMa.m12 = 0.0;
			MtxAdaptMa.m20 = 0.0;
			MtxAdaptMa.m21 = 0.0;
			MtxAdaptMa.m22 = 1.0;
			
			MtxAdaptMaI.m00 = 1.0;
			MtxAdaptMaI.m01 = 0.0;
			MtxAdaptMaI.m02 = 0.0;
			MtxAdaptMaI.m10 = 0.0;
			MtxAdaptMaI.m11 = 1.0;
			MtxAdaptMaI.m12 = 0.0;
			MtxAdaptMaI.m20 = 0.0;
			MtxAdaptMaI.m21 = 0.0;
			MtxAdaptMaI.m22 = 1.0;
			
			chadtoOut = "None";
			break;
	}
}

function XYZ2RGB()
{
	var X2 = XYZ.X;
	var Y2 = XYZ.Y;
	var Z2 = XYZ.Z;
	
	if (AdaptationMethod != 6)
	{
		var As = RefWhite.X * MtxAdaptMa.m00 + RefWhite.Y * MtxAdaptMa.m10 + RefWhite.Z * MtxAdaptMa.m20;
		var Bs = RefWhite.X * MtxAdaptMa.m01 + RefWhite.Y * MtxAdaptMa.m11 + RefWhite.Z * MtxAdaptMa.m21;
		var Cs = RefWhite.X * MtxAdaptMa.m02 + RefWhite.Y * MtxAdaptMa.m12 + RefWhite.Z * MtxAdaptMa.m22;
		
		var Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
		var Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
		var Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
		
		var X1 = XYZ.X * MtxAdaptMa.m00 + XYZ.Y * MtxAdaptMa.m10 + XYZ.Z * MtxAdaptMa.m20;
		var Y1 = XYZ.X * MtxAdaptMa.m01 + XYZ.Y * MtxAdaptMa.m11 + XYZ.Z * MtxAdaptMa.m21;
		var Z1 = XYZ.X * MtxAdaptMa.m02 + XYZ.Y * MtxAdaptMa.m12 + XYZ.Z * MtxAdaptMa.m22;
		
		X1 *= (Ad / As);
		Y1 *= (Bd / Bs);
		Z1 *= (Cd / Cs);
		
		X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
		Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
		Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
	}
	
	RGB.R = Compand(X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20);
	RGB.G = Compand(X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21);
	RGB.B = Compand(X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22);
}

function RGB2XYZ()
{
	var R = InvCompand(RGB.R);
	var G = InvCompand(RGB.G);
	var B = InvCompand(RGB.B);
	
	XYZ.X = R * MtxRGB2XYZ.m00 + G * MtxRGB2XYZ.m10 + B * MtxRGB2XYZ.m20;
	XYZ.Y = R * MtxRGB2XYZ.m01 + G * MtxRGB2XYZ.m11 + B * MtxRGB2XYZ.m21;
	XYZ.Z = R * MtxRGB2XYZ.m02 + G * MtxRGB2XYZ.m12 + B * MtxRGB2XYZ.m22;
	
	if (AdaptationMethod != 6)
	{
		var Ad = RefWhite.X * MtxAdaptMa.m00 + RefWhite.Y * MtxAdaptMa.m10 + RefWhite.Z * MtxAdaptMa.m20;
		var Bd = RefWhite.X * MtxAdaptMa.m01 + RefWhite.Y * MtxAdaptMa.m11 + RefWhite.Z * MtxAdaptMa.m21;
		var Cd = RefWhite.X * MtxAdaptMa.m02 + RefWhite.Y * MtxAdaptMa.m12 + RefWhite.Z * MtxAdaptMa.m22;
		
		var As = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
		var Bs = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
		var Cs = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
		
		var X = XYZ.X * MtxAdaptMa.m00 + XYZ.Y * MtxAdaptMa.m10 + XYZ.Z * MtxAdaptMa.m20;
		var Y = XYZ.X * MtxAdaptMa.m01 + XYZ.Y * MtxAdaptMa.m11 + XYZ.Z * MtxAdaptMa.m21;
		var Z = XYZ.X * MtxAdaptMa.m02 + XYZ.Y * MtxAdaptMa.m12 + XYZ.Z * MtxAdaptMa.m22;
		
		X *= (Ad / As);
		Y *= (Bd / Bs);
		Z *= (Cd / Cs);
		
		XYZ.X = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
		XYZ.Y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
		XYZ.Z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
	}
}

function GetNumber(s)
{
	var val = parseFloat(s);
	return(isNaN(val) ? 0.0 : val);
	
}

function Compand(linear)
{
	var companded;
	if (Gamma == 6.0) { //Rec. 2020
		var sign = 1.0;
		if (linear < 0.0)
		{
			sign = -1.0;
			linear = -linear;
		}
		companded = (linear <= 0.018053968510807) ? (linear * 4.5) : (Math.pow(linear, 0.45) - 0.09929682680944);
		companded *= sign;
	} else
	if (Gamma > 0.0)
	{
		companded = (linear >= 0.0) ? Math.pow(linear, 1.0 / Gamma) : -Math.pow(-linear, 1.0 / Gamma);
	}
	else if (Gamma < 0.0)
	{
		/* sRGB */
		var sign = 1.0;
		if (linear < 0.0)
		{
			sign = -1.0;
			linear = -linear;
		}
		companded = (linear <= 0.0031308) ? (linear * 12.92) : (1.055 * Math.pow(linear, 1.0 / 2.4) - 0.055);
		companded *= sign;
	}
	else if (Gamma == 0.0)
	{
		/* L* */
		var sign = 1.0;
		if (linear < 0.0)
		{
			sign = -1.0;
			linear = -linear;
		}
		companded = (linear <= (216.0 / 24389.0)) ? (linear * 24389.0 / 2700.0) : (1.16 * Math.pow(linear, 1.0 / 3.0) - 0.16);
		companded *= sign;
	}
	return(companded);
}

function InvCompand(companded)
{
	var linear;
	if (Gamma == 6.0) { //Rec. 2020 Inv
		var sign = 1.0;
		if (companded < 0.0)
		{
			sign = -1.0;
			companded = -companded;
		}
	linear = (companded < 0.0812428582986315) ? (companded / 4.5) : Math.pow((companded + 0.09929682680944) / 1.09929682680944, 1/0.45);
		linear *= sign;
	} else
	if (Gamma > 0.0)
	{
		linear = (companded >= 0.0) ? Math.pow(companded, Gamma) : -Math.pow(-companded, Gamma);
	}
	else if (Gamma < 0.0)
	{
		/* sRGB */
		var sign = 1.0;
		if (companded < 0.0)
		{
			sign = -1.0;
			companded = -companded;
		}
		linear = (companded <= 0.04045) ? (companded / 12.92) : Math.pow((companded + 0.055) / 1.055, 2.4);
		linear *= sign;
	}
	else if (Gamma == 0.0)
	{
		/* L* */
		var sign = 1.0;
		if (companded < 0.0)
		{
			sign = -1.0;
			companded = -companded;
		}
		linear = (companded <= 0.08) ? (2700.0 * companded / 24389.0) : ((((1000000.0 * companded + 480000.0) * companded + 76800.0) * companded + 4096.0) / 1560896.0);
		linear *= sign;
	}
	return(linear);
}

function XYZ2xyY()
{
	Den = XYZ.X + XYZ.Y + XYZ.Z;
	/* TODO: divide by zero handling */
	if (Den > 0.0)
	{
		xyY.x = XYZ.X / Den;
		xyY.y = XYZ.Y / Den;
	}
	else
	{
		xyY.x = RefWhite.X / (RefWhite.X + RefWhite.Y + RefWhite.Z);
		xyY.y = RefWhite.Y / (RefWhite.X + RefWhite.Y + RefWhite.Z);
	}
	xyY.Y = XYZ.Y;
}

function XYZ2Lab()
{
	var xr = XYZ.X / RefWhite.X;
	var yr = XYZ.Y / RefWhite.Y;
	var zr = XYZ.Z / RefWhite.Z;
	
	var fx = (xr > kE) ? Math.pow(xr, 1.0 / 3.0) : ((kK * xr + 16.0) / 116.0);
	var fy = (yr > kE) ? Math.pow(yr, 1.0 / 3.0) : ((kK * yr + 16.0) / 116.0);
	var fz = (zr > kE) ? Math.pow(zr, 1.0 / 3.0) : ((kK * zr + 16.0) / 116.0);
	
	Lab.L = 116.0 * fy - 16.0;
	Lab.a = 500.0 * (fx - fy);
	Lab.b = 200.0 * (fy - fz);
}

function XYZ2Luv()
{
	var Den = XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z;
	var up = (Den > 0.0) ? ((4.0 * XYZ.X) / (XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z)) : 0.0;
	var vp = (Den > 0.0) ? ((9.0 * XYZ.Y) / (XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z)) : 0.0;
	
	var urp = (4.0 * RefWhite.X) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	var vrp = (9.0 * RefWhite.Y) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	
	var yr = XYZ.Y / RefWhite.Y;
	
	Luv.L = (yr > kE) ? (116.0 * Math.pow(yr, 1.0 / 3.0) - 16.0) : (kK * yr);
	Luv.u = 13.0 * Luv.L * (up - urp);
	Luv.v = 13.0 * Luv.L * (vp - vrp);
}

function xyY2XYZ()
{
	if (xyY.y < 0.000001)
	{
		XYZ.X = XYZ.Y = XYZ.Z = 0.0;
	}
	else
	{
		XYZ.X = (xyY.x * xyY.Y) / xyY.y;
		XYZ.Y = xyY.Y;
		XYZ.Z = ((1.0 - xyY.x - xyY.y) * xyY.Y) / xyY.y;
	}
}

function Lab2XYZ()
{
	var fy = (Lab.L + 16.0) / 116.0;
	var fx = 0.002 * Lab.a + fy;
	var fz = fy - 0.005 * Lab.b;
	
	var fx3 = fx * fx * fx;
	var fz3 = fz * fz * fz;
	
	var xr = (fx3 > kE) ? fx3 : ((116.0 * fx - 16.0) / kK);
	var yr = (Lab.L > kKE) ? Math.pow((Lab.L + 16.0) / 116.0, 3.0) : (Lab.L / kK);
	var zr = (fz3 > kE) ? fz3 : ((116.0 * fz - 16.0) / kK);
	
	XYZ.X = xr * RefWhite.X;
	XYZ.Y = yr * RefWhite.Y;
	XYZ.Z = zr * RefWhite.Z;
}

function Lab2LCHab()
{
	LCHab.L = Lab.L;
	LCHab.C = Math.sqrt(Lab.a * Lab.a + Lab.b * Lab.b);
	LCHab.H = 180.0 * Math.atan2(Lab.b, Lab.a) / Math.PI;
	if (LCHab.H < 0.0)
	{
		LCHab.H += 360.0;
	}
}

function LCHab2Lab()
{
	Lab.L = LCHab.L;
	Lab.a = LCHab.C * Math.cos(LCHab.H * Math.PI / 180.0);
	Lab.b = LCHab.C * Math.sin(LCHab.H * Math.PI / 180.0);
}

function Luv2XYZ()
{
	XYZ.Y = (Luv.L > kKE) ? Math.pow((Luv.L + 16.0) / 116.0, 3.0) : (Luv.L / kK);
	var u0 = (4.0 * RefWhite.X) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	var v0 = (9.0 * RefWhite.Y) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	
	var a = (((52.0 * Luv.L) / (Luv.u + 13.0 * Luv.L * u0)) - 1.0) / 3.0;
	var b = -5.0 * XYZ.Y;
	var c = -1.0 / 3.0;
	var d = XYZ.Y * (((39.0 * Luv.L) / (Luv.v + 13.0 * Luv.L * v0)) - 5.0);
	
	XYZ.X = (d - b) / (a - c);
	XYZ.Z = XYZ.X * a + b;
}

function Luv2LCHuv()
{
	LCHuv.L = Luv.L;
	LCHuv.C = Math.sqrt(Luv.u * Luv.u + Luv.v * Luv.v);
	LCHuv.H = 180.0 * Math.atan2(Luv.v, Luv.u) / Math.PI;
	if (LCHuv.H < 0.0)
	{
		LCHuv.H += 360.0;
	}
}

function LCHuv2Luv()
{
	Luv.L = LCHuv.L;
	Luv.u = LCHuv.C * Math.cos(LCHuv.H * Math.PI / 180.0);
	Luv.v = LCHuv.C * Math.sin(LCHuv.H * Math.PI / 180.0);
}

function CCT2XYZ()
{
	var Temp = CCT;
	var C1 = 2.0 * Math.PI * 6.626176 * 2.99792458 * 2.99792458;	// * 1.0e-18
	var C2 = (6.626176 * 2.99792458) / 1.380662;	// * 1.0e-3
	var nm;
	var i = 0;
	XYZ.X = 0.0;
	XYZ.Y = 0.0;
	XYZ.Z = 0.0;
	
	for (nm = 360; nm <= 830; nm += 5)
	{
		var dWavelengthM = nm * 1.0e-3;	// * 1.0e-6
		var dWavelengthM5 = dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM;	// * 1.0e-30
		var blackbody = C1 / (dWavelengthM5 * 1.0e-12 * (Math.exp(C2 / (Temp * dWavelengthM * 1.0e-3)) - 1.0));	// -12 = -30 - (-18)
		XYZ.X += (blackbody * CIE1931StdObs_x[i]);
		XYZ.Y += (blackbody * CIE1931StdObs_y[i]);
		XYZ.Z += (blackbody * CIE1931StdObs_z[i]);
		i++;
	}
	XYZ.X /= XYZ.Y;
	XYZ.Z /= XYZ.Y;
	XYZ.Y = 1.0;
}

function CCT2refWhite()
{
	GetRefWhiteCCT(document.converter)
	var Temp = refWcct;
	var C1 = 2.0 * Math.PI * 6.626176 * 2.99792458 * 2.99792458;	// * 1.0e-18
	var C2 = (6.626176 * 2.99792458) / 1.380662;	// * 1.0e-3
	var nm;
	var i = 0;
	XYZwX = 0.0;
	XYZwY = 0.0;
	XYZwZ = 0.0;
	
	for (nm = 360; nm <= 830; nm += 5)
	{
		var dWavelengthM = nm * 1.0e-3;	// * 1.0e-6
		var dWavelengthM5 = dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM;	// * 1.0e-30
		var blackbody = C1 / (dWavelengthM5 * 1.0e-12 * (Math.exp(C2 / (Temp * dWavelengthM * 1.0e-3)) - 1.0));	// -12 = -30 - (-18)
		XYZwX += (blackbody * CIE1931StdObs_x[i]);
		XYZwY += (blackbody * CIE1931StdObs_y[i]);
		XYZwZ += (blackbody * CIE1931StdObs_z[i]);
		i++;
	}
	XYZwX /= XYZwY;
	XYZwZ /= XYZwY;
	XYZwY = 1.0;
	
	RefWhite.X = XYZwX;
	RefWhite.Y = XYZwY;
	RefWhite.Z = XYZwZ;
}

function DigitCMYKCheckBox(theForm) {
	if (theForm.DigitCMYK.checked == true) {
		digitink = 1;
	} else {
		digitink = 0;
	}
	FillCMYKCells(theForm);
}

function DigitRGBCheckBox(theForm) {
	if (theForm.DigitRGB.checked == true) {
		digitinkR = 2;
	} else {
		digitinkR = 0;
	}
	FillRGBCells(theForm);
}

function XYZCheckBox(theForm)
{
	ScaleXYZ = (ScaleXYZ == true) ? false : true;
	var scale = (ScaleXYZ == false) ? 0.01 : 1.0;
	XYZ.X = scale * GetNumber(theForm.XYZ_X.value);
	XYZ.Y = scale * GetNumber(theForm.XYZ_Y.value);
	XYZ.Z = scale * GetNumber(theForm.XYZ_Z.value);
	FillXYZCells(theForm);
}

function YCheckBox(theForm)
{
	ScaleY = (ScaleY == true) ? false : true;
	var scale = (ScaleY == false) ? 0.01 : 1.0;
	xyY.Y = scale * GetNumber(theForm.xyY_Y.value);
	FillxyYCells(theForm);
}

function RGBCheckBox(theForm)
{
	ScaleRGB = (ScaleRGB == true) ? false : true;
	var scale = (ScaleRGB == false) ? (1.0 / 255.0) : 1.0;
	RGB.R = scale * GetNumber(theForm.RGB_R.value);
	RGB.G = scale * GetNumber(theForm.RGB_G.value);
	RGB.B = scale * GetNumber(theForm.RGB_B.value);
	FillRGBCells(theForm);
}

var hexarray = new Array("00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F","10","11","12","13","14","15","16","17","18","19","1A","1B","1C","1D","1E","1F","20","21","22","23","24","25","26","27","28","29","2A","2B","2C","2D","2E","2F","30","31","32","33","34","35","36","37","38","39","3A","3B","3C","3D","3E","3F","40","41","42","43","44","45","46","47","48","49","4A","4B","4C","4D","4E","4F","50","51","52","53","54","55","56","57","58","59","5A","5B","5C","5D","5E","5F","60","61","62","63","64","65","66","67","68","69","6A","6B","6C","6D","6E","6F","70","71","72","73","74","75","76","77","78","79","7A","7B","7C","7D","7E","7F","80","81","82","83","84","85","86","87","88","89","8A","8B","8C","8D","8E","8F","90","91","92","93","94","95","96","97","98","99","9A","9B","9C","9D","9E","9F","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","AA","AB","AC","AD","AE","AF","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","BA","BB","BC","BD","BE","BF","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","CA","CB","CC","CD","CE","CF","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","DA","DB","DC","DD","DE","DF","E0","E1","E2","E3","E4","E5","E6","E7","E8","E9","EA","EB","EC","ED","EE","EF","F0","F1","F2","F3","F4","F5","F6","F7","F8","F9","FA","FB","FC","FD","FE","FF"); 

function hex_create() {
	gamut_error = 0;
	backgrR = (RGB.R * 255).toFixed(0);
	backgrG = (RGB.G * 255).toFixed(0);
	backgrB = (RGB.B * 255).toFixed(0);
	
	if (RGB.R < 0.0) {backgrR = 0.0; gamut_error = 1;}
	if (RGB.G < 0.0) {backgrG = 0.0; gamut_error = 1;}
	if (RGB.B < 0.0) {backgrB = 0.0; gamut_error = 1;}
	if (backgrR > 255) {backgrR = 255; gamut_error = 1;}
	if (backgrG > 255) {backgrG = 255; gamut_error = 1;}
	if (backgrB > 255) {backgrB = 255; gamut_error = 1;}
}

function bgcolor(theForm)
{
	secondbgc1 = false;
	hex_create();
	leftbgColor = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
	
	theForm.hexcode.value = leftbgColor;
	if (gamut_error == 1) {
	theForm.gamut_alert.value = " Out of gamut!";
	theForm.gamut_alert.style.color = 'red';
	theForm.gamut_alert.style.fontWeight = 'bold';
	}
	else
	{
	theForm.gamut_alert.value = " Fit gamut";
	theForm.gamut_alert.style.color = 'black';
	theForm.gamut_alert.style.fontWeight = 'normal';
	}
	
}

function bgcolor1() {
	if (document.getElementById('GMldiv').getElementsByTagName('div').length > 0){
	document.getElementById('GMldiv').removeChild(document.getElementById('GMldiv').getElementsByTagName('div')[0]); }
	
	hex_create();
	
	leftbgColor = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
	
	if(LCHab.L > 35) {
	colortextout = "#000000"; } else {
	colortextout = "#FFFFFF";	
	}
	
	if(secondbgc1 == true && mapping_selector == true) { //two-dimensional space: Taylor 
	gmtext = "(two-dimensional gamut mapping)";
	var GMldiv = document.createElement('div'); 
GMldiv.innerHTML = '*To <a href="img/TwoDimensionalTaylor.png" target="_blank" class="linkst">RGB</a> <span style="color: red;">Gamut mapping</span>:';
document.getElementById('GMldiv').appendChild(GMldiv);
	} else {
	gmtext = " ";
	var GMldiv = document.createElement('div'); 
GMldiv.innerHTML = '*To <a href="img/TwoDimensionalTaylor.png" target="_blank" class="linkst">RGB</a> Gamut mapping:';
document.getElementById('GMldiv').appendChild(GMldiv);
	}
	
	var rgbOverload = false;
	if (RGB.R < 0.0 || RGB.G < 0.0 || RGB.B < 0.0 || RGB.R > 1.0 || RGB.G > 1.0 || RGB.B > 1.0) {
		rgbOverload = true;
	}
	
	if (predefCSSv4 == false && mapping_selector == false && rgbOverload == true) {
			gmtext = "(primitive channel clippig)";
		}
	if (predef == 1 || predefCSSv4 == false) { //no CSS v4
		text1 = '<h4 style="color: '+colortextout+' !important;">R: '+backgrR+' &nbsp; G: '+backgrG+' &nbsp; B: '+backgrB+'</h4><h4 style="color: '+colortextout+' !important;">hex = '+leftbgColor+'<br>'+gmtext+'<br><br><br><br><br><br><br></h4>';
	}
	if (predefCSSv4 == true && predef != 1) {
		if (mapping_selector == false && rgbOverload == true) {
			gmtext = "(own browser gamut mapping or clipping)";
		}
		leftbgColor = 'color('+predefined_rgb[predef]+' '+RGB.R.toFixed(6)+' '+RGB.G.toFixed(6)+' '+RGB.B.toFixed(6)+')';
		text1 = '<h4 style="color: '+colortextout+' !important;">⚒ CSS v4: '+leftbgColor+'</h4><h4 style="color: '+colortextout+' !important;">'+gmtext+'<br><br><br><br><br><br><br><br></h4>';
	}
	
	if (document.getElementById('leftback').getElementsByTagName('div').length > 0){
	document.getElementById('leftback').removeChild(document.getElementById('leftback').getElementsByTagName('div')[0]);
	}
	var leftDiv = document.createElement('div'); 
leftDiv.innerHTML = '<div style="width:684px; height:'+vhigh+'px; background-color:'+leftbgColor+'; vertical-align:text-top;" onmouseover="mouseerror=1;"><h4 style="color: '+colortextout+' !important; padding-top:8px;">Color sample in '+model_to_output+' model: </h4>'+text1+'</div>';
document.getElementById('leftback').appendChild(leftDiv);

}


function hyperlink() {
	if (document.getElementById('linkdiv').getElementsByTagName('div').length > 0){
	document.getElementById('linkdiv').removeChild(document.getElementById('linkdiv').getElementsByTagName('div')[0]);
	}
	if (document.converter.RefWhite.selectedIndex != 11) {var rfwl = document.converter.RefWhite.selectedIndex;}
	else {
		var rfwl = document.converter.refWcctF.value;
		rfwl = rfwl.replace(" ","");
		rfwl = rfwl.replace("K","");
		}
		var FRPrel = FRP;
		if (document.converter.Fogra.selectedIndex == 5) {var FRPrel = 5;}
		
	var linkDiv = document.createElement('div'); 
linkDiv.innerHTML = '&nbsp;&nbsp;<a href="https://color.totalh.net/?'+Lab.L.toFixed(2)+'&'+Lab.a.toFixed(2)+'&'+Lab.b.toFixed(2)+'&'+rfwl+'&'+document.converter.RGBModel.selectedIndex+'&'+document.converter.Gamma.selectedIndex+'&'+document.converter.Adaptation.selectedIndex+'&'+FRPrel+'&'+VR+'&'+clipping_selector+'&'+mapping_selector+'&'+Har+'&'+predefCSSv4+'" class="linkst">Link</a>';
document.getElementById('linkdiv').appendChild(linkDiv);
}

function hyperlinkCMYK() { // copy of function hyperlink but + CMYK at the end
	if (document.getElementById('linkdiv').getElementsByTagName('div').length > 0){
	document.getElementById('linkdiv').removeChild(document.getElementById('linkdiv').getElementsByTagName('div')[0]);
	}
	if (document.converter.RefWhite.selectedIndex != 11) {var rfwl = document.converter.RefWhite.selectedIndex;}
	else {
		var rfwl = document.converter.refWcctF.value;
		rfwl = rfwl.replace(" ","");
		rfwl = rfwl.replace("K","");
		}
		var FRPrel = FRP;
		if (document.converter.Fogra.selectedIndex == 5) {var FRPrel = 5;}
		
	var linkDiv = document.createElement('div'); 
linkDiv.innerHTML = '&nbsp;&nbsp;<a href="https://color.totalh.net/?'+Lab.L.toFixed(2)+'&'+Lab.a.toFixed(2)+'&'+Lab.b.toFixed(2)+'&'+rfwl+'&'+document.converter.RGBModel.selectedIndex+'&'+document.converter.Gamma.selectedIndex+'&'+document.converter.Adaptation.selectedIndex+'&'+FRPrel+'&'+VR+'&'+clipping_selector+'&'+mapping_selector+'&'+Har+'&'+predefCSSv4+'&'+CMYK.C.toFixed(digitink)+'&'+CMYK.M.toFixed(digitink)+'&'+CMYK.Y.toFixed(digitink)+'&'+CMYK.K.toFixed(digitink)+'" class="linkst">Link</a>';
document.getElementById('linkdiv').appendChild(linkDiv);
}

/* function hyperlinkCheck() {
	var get = location.search;
	if (get != '') {
		
		var testFacebook = new RegExp('fbclid');
		if (testFacebook.test(get) == true) {
			alert("Фейсбук псує посилання з даними get");
		}
		
		selpos = (get.substr(1)).split('&');
		//alert(selpos.length);
		
		if (selpos.length == 12 || selpos.length == 13 || selpos.length == 17) { //17 is CMYK
			
		if (selpos[9] == "false"){
		document.converter.clipping.checked = false;
		clipping_selector = false;
		} else {
		document.converter.clipping.checked = true;
		clipping_selector = true;
		}
		
		if (selpos[10] == "false"){
		document.converter.mapping.checked = false;
		mapping_selector = false;
		} else {
		document.converter.mapping.checked = true;
		mapping_selector = true;
		}
		
		
		if (selpos[3] < 11) {var rfws = selpos[3];}
		else {
			var rfws = 11;
			document.converter.refWcctF.value = " "+selpos[3]+"K";
			}
		
		document.converter.Lab_L.value = selpos[0];
		document.converter.Lab_a.value = selpos[1];
		document.converter.Lab_b.value = selpos[2];
		//document.converter.RefWhite.selectedIndex = selpos[3];
		document.converter.RefWhite.selectedIndex = rfws;
		document.converter.RGBModel.selectedIndex = selpos[4];
		document.converter.Gamma.selectedIndex = selpos[5];
		document.converter.Adaptation.selectedIndex = selpos[6];
		document.converter.Fogra.selectedIndex = selpos[7];
		document.converter.Veer.selectedIndex = selpos[8];
		document.converter.Harmony.selectedIndex = selpos[11];
			
		if (selpos.length == 13 || selpos.length == 17){ //проверка на 13 а не 12 для старых ссылок без SCCv4
		if (selpos[12] == "true"){
		document.converter.predefRGB.checked = true;
		predefCSSv4 = true;
		} else {
		document.converter.predefRGB.checked = false;
		predefCSSv4 = false;
		}}
		
		CMYKSelect();
		// AbsPrompt(document.converter);
		refWPriority=true; 
		GetRefWhite(document.converter);
			
		} else { // non (selpos.length == 12 || selpos.length == 13 || selpos.length == 17)
		alert("Неверные данные в адресной строке");
		document.converter.clipping.checked = true;
		clipping_selector = true;
		document.converter.mapping.checked = true;
		mapping_selector = true;
		} 
		
			if (selpos.length == 12 || selpos.length == 13){
		ButtonLab(document.converter);
			}

			if (selpos.length == 17){
		document.converter.CMYK_C.value = selpos[13];
		document.converter.CMYK_M.value = selpos[14];
		document.converter.CMYK_Y.value = selpos[15];
		document.converter.CMYK_K.value = selpos[16];
		ButtonCMYK(document.converter);
			labPrioritet = false;
			}
	}
	else {
		document.converter.clipping.checked = true;
		clipping_selector = true;
		document.converter.mapping.checked = true;
		mapping_selector = true;
	}
} */

function setCheckBox(checked) {
var checkbox = document.getElementsByTagName('input');
for(var i=0;i!=checkbox.length;i++) {
if (checkbox[i].type == 'checkbox') {
checkbox[i].checked = checked;
}
}
return true;
}


function alert1raz () {
	alertD65++; // предупреждение о D50 и D65 один раз
	if (alertD65 == 1) {
		alert("     Зірочкою позначений спектральний фільтр M2 (UV-cut), сумісний з Pantone Connect та Adobe.\n     Зверніть увагу на опорний ілюмінант D50 та D65! 10° спостерігача CIE використовуйте для великих однорідних площ. Для фарб RAL, NCS, DIN опорний ілюмінант D65 по стандарту, а D50 для них - результат хроматичної адаптації по CIECAM02. Для деяких фарб PANTONE доступні спектри, тому Lab D50 і D65 для 2° і 10° спостерігача CIE бездоганно пораховані із спектрів.\n     Все що не стосується розділу Spot рекомендуємо вважати при Lab D50, Photoshop та інші дизайнерскі програми переважають Lab D50.\n     Не забувайте натискати кнопку Spot після зміни кольорового каталогу. ΔE у полі праворуч від фарби показує колірну відмінність поточних значень LCh до найближчої за кольором фарби.");
	}
}

function alertFogra1raz() {
	alertFogra++; // предупреждение один раз
	if (alertFogra == 1) {
		alert("     Доступні фарби Європейської Тріади за стандартом офсетного друку ISO 12647-2:2007. Fogra 39 - листовий офсетний друк на мелованому папері. Fogra 45 - ротаціонна (журнальна) друк на легкомелованому папері. Fogra 47 - листовий друк на офсетному (немелованому) папері з найменшим колірним охопленням (менше тільки газетний папір).\n     Rendering Intent - Perceptual, біла мітка - папір при D50. Сумарна кількість фарби TIL = 300 для кольорових і 240 для суперчорного. При генерації черного MaxK встановлено значення суперчорного для друку пресетів - традиційна, для кольорових профілей Fogra и ECI.");
	}
}

function alertNullNull() {
	if(LCHab.L == 0.0 && LCHab.C > 0.0 && document.converter.clipping.checked == true) {
		alert("Нульова світлота обмежує величину насиченості так само нулем. \nНульова світлота - це повна відсутність кольоровості.\nЯкщо у ваших дослідженнях цей незаперечний факт заважає - \nви можете вимкнути HVS Clipping значення \nнеіснуючих кольорів у безрозмірному просторі Lab. \nНайтемніша з існуючих фарб має світлоту 4 \nпри насиченості менше одиниці.");
		document.converter.ranL.value = 50;
	}
	if(LCHab.L == 100.0 && LCHab.C > 0.0 && document.converter.clipping.checked == true) {
		alert("Cвітлота 100 обмежує величину насиченості нулем \nу просторі кольору Human Visual Space. \nЯкщо у ваших дослідженнях цей незаперечний факт заважає - \nви можете вимкнути HVS Clipping значення \nнеіснуючих кольорів у безрозмірному просторі Lab.");
		document.converter.ranL.value = 50;
	}
}

/*function SliderColorChroma() {
	stooperSL = false;
	colorLfon = document.converter.hexcode.value;
	
	if (document.getElementById('raskraskaL').getElementsByTagName('div').length > 0){
	document.getElementById('raskraskaL').removeChild(document.getElementById('raskraskaL').getElementsByTagName('div')[0]);
	}
	raskraskaLd = document.createElement('div'); 
raskraskaLd.innerHTML = '<table><tr><td class="ColorContentTables" style="background: linear-gradient(to right, '+colorLfon+', #FFFFFF);"><input type="range" name="ranL" class="range" min="0" max="100" step="0.1" value="'+LCHab.L+'" onchange="Slider2LCHab(document.converter); SliderColorChroma();" /></td></tr></table>';
document.getElementById('raskraskaL').appendChild(raskraskaLd);
alertNullNull();
}*/

function SliderColorLight() {
	stooperSL = false;
	//colorCfon = document.converter.hexcode.value;
	var slL = parseFloat(document.converter.ranL.value);
	colorCfon1 = sliderHex(slL,0.0,0.0);

	slugolH = parseInt(document.converter.ranh.value);
	sledgeL = cubicspline(RGB_surfaceh[surface],RGB_surfaceL[surface],[slugolH]);
	sledgeC = cubicspline(RGB_surfaceh[surface],RGB_surfaceC[surface],[slugolH]);
	
	var stepperL = parseFloat(sledgeL[0]-slL)/10;
	var stepperC = parseFloat(sledgeC[0])-2;
	
	for (var i=0; i<10; i++){
	colorCfon2tr = sliderHex(slL,stepperC,slugolH);

	if (colorCfon2tr[1] == false) {
		colorCfon2 = colorCfon2tr[0];
		i=10;
	}
	else {
	slL = parseFloat(slL+stepperL/1.5);
	stepperC = parseFloat(stepperC - Math.abs(stepperL));
	colorCfon2 = colorCfon2tr[0];
	}
	}

if (document.getElementById('raskraskaC').getElementsByTagName('div').length > 0){
	document.getElementById('raskraskaC').removeChild(document.getElementById('raskraskaC').getElementsByTagName('div')[0]);
	}
	raskraskaCd = document.createElement('div'); 
raskraskaCd.innerHTML = '<table border="0" cellspacing="0" cellpadding="0"><tr><td class="ColorContentTables" style="background: linear-gradient(to right, '+colorCfon1[0]+', '+colorCfon2+');"><input type="range" name="ranC" class="range" min="0" max="'+parseInt(sledgeC)+'" step="0.1" value="'+LCHab.C+'" oninput="Slider2LCHab(this.form);" onchange="Slider2LCHab(document.converter); TDplus();" /></td></tr></table>';
document.getElementById('raskraskaC').appendChild(raskraskaCd);
}
	
	
	
function sliderHex(slLabL,slLChC,slLChh) {
	
	var slLaba = slLChC * Math.cos(slLChh * Math.PI / 180.0);
	var slLabb = slLChC * Math.sin(slLChh * Math.PI / 180.0);
	
	var fy = (slLabL + 16.0) / 116.0;
	var fx = 0.002 * slLaba + fy;
	var fz = fy - 0.005 * slLabb;
	
	var fx3 = fx * fx * fx;
	var fz3 = fz * fz * fz;
	
	var xr = (fx3 > kE) ? fx3 : ((116.0 * fx - 16.0) / kK);
	var yr = (slLabL > kKE) ? Math.pow((slLabL + 16.0) / 116.0, 3.0) : (slLabL / kK);
	var zr = (fz3 > kE) ? fz3 : ((116.0 * fz - 16.0) / kK);
	
	var slXYZX = xr * RefWhite.X;
	var slXYZY = yr * RefWhite.Y;
	var slXYZZ = zr * RefWhite.Z;
	
	var slX2 = slXYZX;
	var slY2 = slXYZY;
	var slZ2 = slXYZZ;
	
	if (AdaptationMethod != 6)
	{
		var As = RefWhite.X * MtxAdaptMa.m00 + RefWhite.Y * MtxAdaptMa.m10 + RefWhite.Z * MtxAdaptMa.m20;
		var Bs = RefWhite.X * MtxAdaptMa.m01 + RefWhite.Y * MtxAdaptMa.m11 + RefWhite.Z * MtxAdaptMa.m21;
		var Cs = RefWhite.X * MtxAdaptMa.m02 + RefWhite.Y * MtxAdaptMa.m12 + RefWhite.Z * MtxAdaptMa.m22;
		
		var Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
		var Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
		var Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
		
		var slX1 = slXYZX * MtxAdaptMa.m00 + slXYZY * MtxAdaptMa.m10 + slXYZZ * MtxAdaptMa.m20;
		var slY1 = slXYZX * MtxAdaptMa.m01 + slXYZY * MtxAdaptMa.m11 + slXYZZ * MtxAdaptMa.m21;
		var slZ1 = slXYZX * MtxAdaptMa.m02 + slXYZY * MtxAdaptMa.m12 + slXYZZ * MtxAdaptMa.m22;
		
		slX1 *= (Ad / As);
		slY1 *= (Bd / Bs);
		slZ1 *= (Cd / Cs);
		
		slX2 = slX1 * MtxAdaptMaI.m00 + slY1 * MtxAdaptMaI.m10 + slZ1 * MtxAdaptMaI.m20;
		slY2 = slX1 * MtxAdaptMaI.m01 + slY1 * MtxAdaptMaI.m11 + slZ1 * MtxAdaptMaI.m21;
		slZ2 = slX1 * MtxAdaptMaI.m02 + slY1 * MtxAdaptMaI.m12 + slZ1 * MtxAdaptMaI.m22;
	}
	
	var slRGBR = Compand(slX2 * MtxXYZ2RGB.m00 + slY2 * MtxXYZ2RGB.m10 + slZ2 * MtxXYZ2RGB.m20);
	var slRGBG = Compand(slX2 * MtxXYZ2RGB.m01 + slY2 * MtxXYZ2RGB.m11 + slZ2 * MtxXYZ2RGB.m21);
	var slRGBB = Compand(slX2 * MtxXYZ2RGB.m02 + slY2 * MtxXYZ2RGB.m12 + slZ2 * MtxXYZ2RGB.m22);
	
	var gerr = false;
	
	var slbackgrR = (slRGBR * 255).toFixed(0);
	var slbackgrG = (slRGBG * 255).toFixed(0);
	var slbackgrB = (slRGBB * 255).toFixed(0);

	if (slRGBR < 0.0) {slbackgrR = 0.0; var gerr = true;}
	if (slRGBG < 0.0) {slbackgrG = 0.0; var gerr = true;}
	if (slRGBB < 0.0) {slbackgrB = 0.0; var gerr = true;}
	if (slbackgrR > 255) {slbackgrR = 255; var gerr = true;}
	if (slbackgrG > 255) {slbackgrG = 255; var gerr = true;}
	if (slbackgrB > 255) {slbackgrB = 255; var gerr = true;}
	
	return ["#" + hexarray[slbackgrR] + hexarray[slbackgrG] + hexarray[slbackgrB],gerr,'color('+predefined_rgb[predef]+' '+slRGBR.toFixed(6)+' '+slRGBG.toFixed(6)+' '+slRGBB.toFixed(6)+')'];
}
	

function byteToHex(b) {
    var hex = b.toString(16);
    return (hex.length == 1) ? ('0' + hex) : (hex);
}

function rgbToHex(r, g, b) {
    return ("#" + byteToHex(r) + byteToHex(g) + byteToHex(b)).toUpperCase();
}

function starterRandom() {
	trmemtext = '';
	for (var tt = 0; tt < 12; tt++) {
	var rgbtt = rgbToHex(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256));
	hexTD.push(rgbtt);
	trmemtext += '<td onclick=\'plusTD = false; document.converter.hexcode.value = "'+hexTD[tt]+'"; ButtonHEX(document.converter);\' width="57px" height="57px" bgcolor="'+hexTD[tt]+'"></td>';
	}
	hexTD.push("#6AA43E"); // current green
	var trmemCd = document.createElement('div'); 
trmemCd.innerHTML = '<table width="684" cellspacing="0" cellpadding="0" align="center"><tr>'+trmemtext+'</tr></table>';
document.getElementById('trmem').appendChild(trmemCd);
}

function diap_all_checker() {
	if (document.converter.diap_all.checked == true) {
	document.converter.diap_red.checked = false;
	document.converter.diap_orange.checked = false;
	document.converter.diap_yellow.checked = false;
	document.converter.diap_green.checked = false;
	document.converter.diap_cyan.checked = false;
	document.converter.diap_blue.checked = false;
	document.converter.diap_violet.checked = false;
	document.converter.diap_gray.checked = false;
	}
	if (document.converter.diap_all.checked == false) {
	document.converter.diap_gray.checked = true;
	}
}

function diap_gray_checker() {
	if (document.converter.diap_gray.checked == true) {
	document.converter.diap_red.checked = false;
	document.converter.diap_orange.checked = false;
	document.converter.diap_yellow.checked = false;
	document.converter.diap_green.checked = false;
	document.converter.diap_cyan.checked = false;
	document.converter.diap_blue.checked = false;
	document.converter.diap_violet.checked = false;
	document.converter.diap_all.checked = false;
	document.converter.sorti.value = 1;
	}
}

function chroma_cut_change() {
	chroma_cut_value = parseInt(document.converter.chroma_cut.value);
	if (isNaN(chroma_cut_value) == true) {chroma_cut_value = 8;}
	if (chroma_cut_value < 0 || chroma_cut_value > 100) chroma_cut_value = 8;
}

function SpotFinder() {
	//PantoneSelect(document.converter);
	GetLab(document.converter);
	var temp_vozvrat = [Lab.L,Lab.a,Lab.b];
	if (document.converter.Veer.selectedIndex != 18) {
	if (document.converter.razmer.value == 0 && document.converter.gaps.checked == false) {
		pwidth = 20;
		pstroka = 31;
		pemp = "&emsp;";
		pcellsp = 0;
	}
	if (document.converter.razmer.value == 1 && document.converter.gaps.checked == false) {
		pwidth = 37;
		pstroka = 17;
		pemp = "&emsp;&emsp;&emsp;";
		pcellsp = 0;
	}
	if (document.converter.razmer.value == 2 && document.converter.gaps.checked == false) {
		pwidth = 83;
		pstroka = 7;
		pemp = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;";
		pcellsp = 0;
	}
	if (document.converter.razmer.value == 0 && document.converter.gaps.checked == true) {
		pwidth = 19;
		pstroka = 31;
		pemp = "&emsp;";
		pcellsp = 1;
	}
	if (document.converter.razmer.value == 1 && document.converter.gaps.checked == true) {
		pwidth = 35;
		pstroka = 17;
		pemp = "&emsp;&emsp;";
		pcellsp = 2;
	}
	if (document.converter.razmer.value == 2 && document.converter.gaps.checked == true) {
		pwidth = 80;
		pstroka = 7;
		pemp = "&emsp;&emsp;&emsp;&emsp;&emsp;";
		pcellsp = 3;
	}
	
	chroma_cut_text = '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:4px; margin-bottom:4px;"><tr><td align="left"><strong>Каталог '+VRPp+'</strong></td><td align="right">Отсечка цветных от нейтральных (ахроматичных) на Chroma&emsp;<input name="chroma_cut" type="text" value="'+chroma_cut_value+'" size="2" maxlength="2" style="text-align:center; height:10px !Important; width: 32px;" onchange="chroma_cut_change();" /></td></tr></table>';
	
	if (document.getElementById('chroma_cut_text_div').getElementsByTagName('div').length > 0){
	document.getElementById('chroma_cut_text_div').removeChild(document.getElementById('chroma_cut_text_div').getElementsByTagName('div')[0]);
	}
	var chroma_cut_text_d = document.createElement('div'); 
chroma_cut_text_d.innerHTML = chroma_cut_text;
document.getElementById('chroma_cut_text_div').appendChild(chroma_cut_text_d);

	finder_text = '<table width="100%" border="0" cellspacing="'+pcellsp+'" cellpadding="0" align="center" style="margin-top:6px; margin-bottom:5px;"><tr>';
	GetRefWhite(document.converter);
	GetRefWhiteCCT(document.converter);
	GetRGBModel(document.converter);
	GetGamma(document.converter);
	GetAdaptation(document.converter);
	PantoneSelect(document.converter);
	LChFinder = [];
for (var i=0; i<VRI; i++) {
	Lab.L = psp[VR][i][1];
	Lab.a = psp[VR][i][2];
	Lab.b = psp[VR][i][3];
	PantoneNameFinder = VRPp+psp[VR][i][0].toUpperCase();
	Lab2XYZ();
	XYZ2RGB();
	hex_create();
	Lab2LCHab();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	LChFinder[i] = [];
	LChFinder[i][0] = PantoneNameFinder;
	LChFinder[i][1] = LCHab.L;
	LChFinder[i][2] = LCHab.C;
	LChFinder[i][3] = LCHab.H;
	LChFinder[i][4] = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
	LChFinder[i][5] = (LCHab.H/18).toFixed(0);
	}
	
	if (document.converter.diap_red.checked == true || document.converter.diap_orange.checked == true || document.converter.diap_yellow.checked == true || document.converter.diap_green.checked == true || document.converter.diap_cyan.checked == true || document.converter.diap_blue.checked == true || document.converter.diap_violet.checked == true || document.converter.diap_gray.checked == true) {
		document.converter.diap_all.checked = false;
	}
	if (document.converter.diap_red.checked == true || document.converter.diap_orange.checked == true || document.converter.diap_yellow.checked == true || document.converter.diap_green.checked == true || document.converter.diap_cyan.checked == true || document.converter.diap_blue.checked == true || document.converter.diap_violet.checked == true) {
		document.converter.diap_gray.checked = false;
	}
	if (document.converter.diap_red.checked == false && document.converter.diap_orange.checked == false && document.converter.diap_yellow.checked == false && document.converter.diap_green.checked == false && document.converter.diap_cyan.checked == false && document.converter.diap_blue.checked == false && document.converter.diap_violet.checked == false && document.converter.diap_gray.checked == false) {
		document.converter.diap_all.checked = true;
	}

	
if (document.converter.diap_all.checked == false) {
	LChFinder.sort(sortH);
	var diap = [];
	var diapg = [];
	var j=0;
	
	if (document.converter.diap_gray.checked == false) { //отсекаем нейтральные
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][2] >= chroma_cut_value) {
				diapg[j] = LChFinder[i];
				j++;
			}}
		LChFinder.length = 0;
		LChFinder = diapg;
		var j=0;
		VRI = LChFinder.length;
		} // diap_gray.checked == false
	
	if (document.converter.diap_red.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 0 && LChFinder[i][3] < 55) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_orange.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 55 && LChFinder[i][3] < 80) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_yellow.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 80 && LChFinder[i][3] < 110) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_green.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 110 && LChFinder[i][3] < 200) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_cyan.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 200 && LChFinder[i][3] < 250) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_blue.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 250 && LChFinder[i][3] < 300) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	if (document.converter.diap_violet.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 300 && LChFinder[i][3] <= 360) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	//----------- красиво красные после фиолетовых
	if (document.converter.diap_red.checked == true && document.converter.diap_violet.checked == true && document.converter.diap_orange.checked == false && document.converter.diap_yellow.checked == false && document.converter.diap_green.checked == false && document.converter.diap_cyan.checked == false &&document.converter.diap_blue.checked == false) {
		diap.length = 0;
		j=0;
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 300 && LChFinder[i][3] <= 360) {
				diap[j] = LChFinder[i];
				j++;
			}}
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][3] >= 0 && LChFinder[i][3] < 55) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	//-----------------
	if (document.converter.diap_gray.checked == true) {
		for (var i=0; i<VRI; i++) {
			if(LChFinder[i][2] < chroma_cut_value) {
				diap[j] = LChFinder[i];
				j++;
			}}}
	LChFinder.length = 0;
	LChFinder = diap;
}//diap_all false
	
	if (document.converter.sorti.value == 1) { //all sort light
	LChFinder.sort(sortL);
	}//all sort light
	
	if (document.converter.sorti.value == 2) { //all sort chroma
	LChFinder.sort(sortC);
	}//all sort chroma
	
	if (document.converter.sorti.value == 3) { //all sort hue
	LChFinder.sort(sortH);
	}//all sort hue
	
	if (document.converter.sorti.value == 4) { //all sort light and hue
	LChFinder.sort(sortLH);
	}//all sort light and hue
	

var j = 0;
for (var i=0; i<LChFinder.length; i++) {
	finder_text += '<td onclick=\'document.converter.LCHab_L.value = "'+LChFinder[i][1]+'"; document.converter.LCHab_C.value = "'+LChFinder[i][2]+'"; document.converter.LCHab_H.value = "'+LChFinder[i][3]+'"; ButtonLCHab(document.converter);\' width="'+pwidth+'" height="'+pwidth+'" bgcolor="'+LChFinder[i][4]+'"><a class="tooltip" style="color:'+LChFinder[i][4]+'; text-decoration: none !important; font-style: normal !important;" href="#1">'+pemp+'<span>'+LChFinder[i][0]+'</span></a></td>';
	j++;
	if (j>pstroka) {j=0; finder_text += '</tr><tr>';}
}

	finder_text += '</tr></table>';
	
	if (document.getElementById('finder').getElementsByTagName('div').length > 0){
	document.getElementById('finder').removeChild(document.getElementById('finder').getElementsByTagName('div')[0]);
	}
	var finderCd = document.createElement('div'); 
finderCd.innerHTML = finder_text;
document.getElementById('finder').appendChild(finderCd);

} else { //Veer 18 nothing

	chroma_cut_text = '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:4px; margin-bottom:4px;"><tr><td align="left"><strong>Красочный каталог '+VRPp+'</strong></td></tr></table>';
	
	if (document.getElementById('chroma_cut_text_div').getElementsByTagName('div').length > 0){
	document.getElementById('chroma_cut_text_div').removeChild(document.getElementById('chroma_cut_text_div').getElementsByTagName('div')[0]);
	}
	var chroma_cut_text_d = document.createElement('div'); 
chroma_cut_text_d.innerHTML = chroma_cut_text;
document.getElementById('chroma_cut_text_div').appendChild(chroma_cut_text_d);

if (document.getElementById('finder').getElementsByTagName('div').length > 0){
	document.getElementById('finder').removeChild(document.getElementById('finder').getElementsByTagName('div')[0]);
	}
}
Lab.L = temp_vozvrat[0];
Lab.a = temp_vozvrat[1];
Lab.b = temp_vozvrat[2];
FillLabCells(document.converter);
ButtonLab(document.converter);
}


function sortL(a, b) { // Сортировка по светлоте возр
  return parseFloat(a[1]) - parseFloat(b[1]);
}

function sortC(a, b) { // Сортировка по хроме убыв
  return parseFloat(b[2]) - parseFloat(a[2]);
}

function sortH(a, b) { // Сортировка по тону возр
  return parseFloat(a[3]) - parseFloat(b[3]);
}

function sortLH(a, b) { //Сортировка по светлоте и тону
		if (parseFloat(a[5]) === parseFloat(b[5])) {
				return parseFloat(b[1]) - parseFloat(a[1]);
		} else {
			return parseFloat(a[5]) - parseFloat(b[5]);
		}
} 


/*
function hexToRgb(hex) {
    // expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
*/

function TDplus() {
	var sliderHexPredef = 0;
	var trmemtextHex1 = 'onclick=\'plusTD = false; document.converter.hexcode.value = "';
	var trmemtextHex2 =	'"; ButtonHEX(document.converter);\'';
	//style="background-color:'+hexTD[tr]+';"></td>';
	if (predefCSSv4 == true && predef != 1) {
		sliderHexPredef = 2;
		trmemtextHex1 = '';
		trmemtextHex2 = '';
	}
	
	GetHarmony();
	
	GetLCHab(document.converter);
//alert(leftbgColor);
if (Har == 0) {
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
if(leftbgColor != hexTD[12] && plusTD == true) {
hexTD.splice(0,1);
hexTD.push(leftbgColor);
}
	} // har
if (Har == 1 && plusTD == true) { //light
	defineMappingCoordinatesFromButton();
	if (labPrioritet == true){
	gamutmappingTaylorTwoDimensional(0);
}	else {
	gamutmappingTaylorTwoDimensional(1); // CMYK
}
	
hexTD.splice(0,1);
hexTD.push(leftbgColor);

	hexTD.length = 0;
if (plusLCHabL[1] > 40 && plusLCHabL[1] < 70) {
	for (var h = (plusLCHabL[1]-12); h < (plusLCHabL[1]+12); h+=2) {
		hexTD.push(sliderHex(h,plusLCHabC[1],LCHab.H)[sliderHexPredef]);
	}
}
if (plusLCHabL[1] >= 70) {
	for (var h = (plusLCHabL[1]-22); h < (plusLCHabL[1]+1); h+=2) {
		hexTD.push(sliderHex(h,plusLCHabC[1],LCHab.H)[sliderHexPredef]);
	}
}
if (plusLCHabL[1] <= 40) {
	for (var h = (plusLCHabL[1]); h < (plusLCHabL[1]+23); h+=2) {
		hexTD.push(sliderHex(h,plusLCHabC[1],LCHab.H)[sliderHexPredef]);
	}
}
hexTD.push(leftbgColor);
//alert(hexTD.length);
	} // har
	
if (Har == 2 && plusTD == true) { //chroma
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional(0);
	var Csto = plusLCHabC[1]/(edgeC[0]*0.01)
	var Hstep = edgeC[0]*0.05;
	//alert(Csto);
	hexTD.length = 0;
if (Csto > 40 && Csto < 70) {
	for (var h = (plusLCHabC[1]-Hstep*6); h < (plusLCHabC[1]+Hstep*6); h+=Hstep) {
		hexTD.push(sliderHex(plusLCHabL[1],h,LCHab.H)[sliderHexPredef]);
	}
}
if (Csto >= 70) {
	for (var h = (plusLCHabC[1]-Hstep*12); h < (plusLCHabC[1]); h+=Hstep) {
		hexTD.push(sliderHex(plusLCHabL[1],h,LCHab.H)[sliderHexPredef]);
	}
}
if (Csto <= 40) {
	for (var h = (plusLCHabC[1]); h < (plusLCHabC[1]+Hstep*12); h+=Hstep) {
		hexTD.push(sliderHex(plusLCHabL[1],h,LCHab.H)[sliderHexPredef]);
	}
}
hexTD.push(leftbgColor);
//alert(hexTD.length);
//plusTD = false;
	}// har
	
	
if (Har == 3 && plusTD == true) { //hue
hexTD.length = 0;

for (var dn = 0; dn < 24; dn+=2) {
	HugolH = Math.floor(LCHab.H-12+dn);
	if (HugolH < 0.0)
	{HugolH += 360.0;}
	if (HugolH > 360.0)
	{HugolH -= 360.0;}
	

	HedgeL = cubicspline(RGB_surfaceh[surface],RGB_surfaceL[surface],[HugolH]);
	HedgeC = cubicspline(RGB_surfaceh[surface],RGB_surfaceC[surface],[HugolH]);
	
if(gamut_error == 1 && mapping_selector == true) {
x1 = 0.0;
if (LCHab.L <= HedgeL[0]) {
y1 = 0.0;
} else {
y1 = 100.0;
}	

x2 = HedgeC[0];
y2 = HedgeL[0];

x3 = LCHab.C;
y3 = LCHab.L;
}
if (plusLCHabL.length > 4) {
	plusLCHabL.splice(4,1);
	plusLCHabC.splice(4,1);
}


if(gamut_error == 1 && mapping_selector == true) { //two-dimensional space: Taylor 

fixLCHabC = LCHab.C;
fixLCHabL = LCHab.L;

// координаты пересечения перпендикуляра с отрезком LCnull-LCmax:
var x4=((x2-x1)*(y2-y1)*(y3-y1)+x1*Math.pow(y2-y1, 2)+x3*Math.pow(x2-x1, 2))/(Math.pow(y2-y1, 2)+Math.pow(x2-x1, 2));
var y4=(y2-y1)*(x4-x1)/(x2-x1)+y1;

if(x4 > HedgeC[0]) {x4 = HedgeC[0];

LCHab.L = y4;
LCHab.C = x4;
plusLCHabL.unshift(y4);
plusLCHabC.unshift(x4);
} else {
plusLCHabL.unshift(fixLCHabL);
plusLCHabC.unshift(fixLCHabC);
} // x4 > HedgeC[0]
} // mapping_selector
	
	//chu = plusLCHabC[0]/(HedgeC[0]*0.01);
	//lhu = plusLCHabL[0]/(HedgeL[0]*0.01);
	//chust = HedgeC[0]*0.05;
	//alert(plusLCHabC[1]+"     "+LCHab.C);
	hexTD.push(sliderHex(plusLCHabL[0],plusLCHabC[0],HugolH)[sliderHexPredef]);
	
}

	
hexTD.push(leftbgColor);
	}// har
	
	trmemtext = '';
for (var tr = 0; tr < 12; tr++) {
	trmemtext += '<td '+trmemtextHex1+hexTD[tr]+trmemtextHex2+' width="57px" height="57px" style="background-color:'+hexTD[tr]+';"></td>';
	//bgcolor="'+hexTD[tr]+'"></td>';
	
	//trmemtextHex1 = 'onclick=\'plusTD = false; document.converter.hexcode.value = "';
	//trmemtextHex2 =	'"; ButtonHEX(document.converter);\' width="57px" height="57px" ';
	//style="background-color:'+hexTD[tr]+';"></td>';
	
}

if (document.getElementById('trmem').getElementsByTagName('div').length > 0){
	document.getElementById('trmem').removeChild(document.getElementById('trmem').getElementsByTagName('div')[0]);
	}
var trmemCd = document.createElement('div'); 
trmemCd.innerHTML = '<table width="684" cellspacing="0" cellpadding="0" align="center"><tr>'+trmemtext+'</tr></table>';
document.getElementById('trmem').appendChild(trmemCd);
//alert(trmemtext);
}

function GetHarmony() {
	switch (document.converter.Harmony.selectedIndex)
	{
		case 0:
			Har = 0;
			break;
		case 1:
			Har = 1;
			break;
		case 2:
			Har = 2;
			break;
		case 3:	
			Har = 3;
			break;
	}
}

function dE() {
	window.open('https://color.byethost3.com/?'+mem_old[0][0]+'&'+mem_old[0][1]+'&'+mem_old[0][2]+'&'+mem_old[1][0]+'&'+mem_old[1][1]+'&'+mem_old[1][2], '_blank');
}

function dEmem() {
	mem_old.unshift([Lab.L.toFixed(2),Lab.a.toFixed(2),Lab.b.toFixed(2)]);
	//alert(mem_old[0]);
}

function log10(arg) {  
    return Math.log(arg)/Math.log(10);  
}

function openReport(theForm) {
	width1 = (screen.width - 1050)/2;
	height1 = (screen.height - 550)/2;
	GetRefWhite(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetRGB(theForm);
	RGB_mapping();
	CMYKSelect();
	GetCMYK(theForm);
	GetXYZ(theForm);
	GetxyY(theForm);
	GetLab(theForm);
	GetLCHab(theForm);
	PantoneSelect(theForm);
	var allhexL = theForm.hexcode.value;
	var allhex = allhexL.toUpperCase();
	
  myWin= open("", "newWindow"+allhex+"", "width=1150, height=580, top="+height1+", left="+width1+", menubar=0, toolbar=0, location=0, directories=0, status=0, scrollbars=0, resizable=1");
  myWin.document.open();
  myWin.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Color&emsp;•&emsp;Динамический отчет цветового конвертера');
  myWin.document.writeln("</title>");
  myWin.document.writeln('<link rel="Stylesheet" type="text/css" href="style.css" />');
  myWin.document.writeln('<link rel="Stylesheet" type="text/css" href="colorconv/colorconv4.css" />');
  myWin.document.writeln("<style type='text/css'>BODY{FONT-FAMILY: Verdana, Arial, Helvetica, Geneva, Sans-Serif;  FONT-SIZE: 11pt; line-height: 2em; margin-top: 1em; margin-right: 0em; margin-left: 0em;} A:link { color: #000; text-decoration: none } A:visited { color: #000; text-decoration: none } A:active { color: #000; text-decoration: none } A:hover { color: #000; text-decoration: underline; font-style: italic }");
  myWin.document.writeln("TABLE{border-style: none; border-spacing: 0px; padding: 4px; margin-top:0.8em; margin-bottom: 1em; margin-left: 1em; margin-right: 0em; TEXT-ALIGN: left; TEXT-INDENT: 1em; }");
  myWin.document.writeln("TH, TH P{vertical-align:text-top; FONT-SIZE: 14pt; margin-top: 0pt; margin-left: 4pt; margin-right: 4pt; color: "+allhex+";}");
  myWin.document.writeln("TD, TD P{text-align: left; vertical-align:text-top; margin-top: 0pt; margin-left: 4pt; margin-right: 4pt;}");
  myWin.document.writeln("*.white {color: #000; text-align: left;}");
  myWin.document.writeln("*.alert {color: #fff; text-align: center;}");
    myWin.document.writeln("*.alertY {color: #FF0; text-align: center;}");
  myWin.document.writeln("</style>");
  myWin.document.writeln("</head><body bgcolor='#cccccc' style='overflow-x:hidden;'>");
  myWin.document.writeln('<table width="100%" align="left" border="0" cellspacing="0" cellpadding="4">');
  myWin.document.writeln('<tr><th colspan="2">Color&emsp;•&emsp;Динамический отчет цветового конвертера</th></tr><tr><td>&emsp;</td><td>&emsp;</td></tr>');
  myWin.document.writeln('<tr><td width=30%>CIE LCh</td><td>'+LCHab.L+'&emsp;&emsp;'+LCHab.C+'&emsp;&emsp;'+LCHab.H+'</td></tr>');
  myWin.document.writeln('<tr><td>CIE Lab</td><td>'+Lab.L+'&emsp;&emsp;'+Lab.a+'&emsp;&emsp;'+Lab.b+'</td></tr>');
  	scale = (ScaleXYZ == false) ? 1.0 : 100.0;
	digits = (ScaleXYZ == false) ? 4 : 3;
  myWin.document.writeln('<tr><td>CIE XYZ</td><td>'+parseFloat((scale * XYZ.X).toFixed(digits))+'&emsp;&emsp;'+parseFloat((scale * XYZ.Y).toFixed(digits))+'&emsp;&emsp;'+parseFloat((scale * XYZ.Z).toFixed(digits))+'</td></tr>');
  myWin.document.writeln('<tr><td>CIE xyY</td><td>'+xyY.x+'&emsp;&emsp;'+xyY.y+'&emsp;&emsp;'+xyY.Y+'</td></tr>');
  	if(theForm.ScaleRGB.checked == true) {scale = 255.0;}
	else { scale = 1.0; }
	digits = (ScaleRGB == false) ? 5 : digitinkR;
  myWin.document.writeln('<tr><td>'+model_to_output_ar[theForm.RGBModel.selectedIndex]+'</td><td>'+backgrR+'&emsp;&emsp;'+backgrG+'&emsp;&emsp;'+backgrB+'</td></tr>');
  if (theForm.DigitCMYK.checked == true) {
		digitink = 1;
	} else {
		digitink = 0;
	}
	if (theForm.Fogra.selectedIndex == 5) {
		var mwpout = '&emsp;&emsp;( XYZ белой точки или бумаги:&emsp;&emsp;'+wmp.X+'&emsp;&emsp;'+wmp.Y+'&emsp;&emsp;'+wmp.Z+' )';
	} else {var mwpout = '';}
	Dabs = log10(1/XYZ.Y); //D Visual
	Drel = log10((0.01*wmp.Y)/XYZ.Y);
  myWin.document.writeln('<tr><td>CMYK '+outCMYKname+'</td><td>'+CMYK.C.toFixed(digitink)+'&emsp;&emsp;'+CMYK.M.toFixed(digitink)+'&emsp;&emsp;'+CMYK.Y.toFixed(digitink)+'&emsp;&emsp;'+CMYK.K.toFixed(digitink)+outCmykGamut+mwpout+'</td></tr><tr><td>D Visual Abs (Rel) </td><td>'+Dabs.toFixed(2)+' ('+Drel.toFixed(2)+'), в скобках относительная денситометрия для бумаги с яркостью Y='+wmp.Y+'</td></tr>');
  var deltaE = [];
	for (var i=0; i<VRI; i++) {
		deltaE[i] = Math.sqrt(Math.pow((Lab.L-psp[VR][i][1]),2)+Math.pow((Lab.a-psp[VR][i][2]),2)+Math.pow((Lab.b-psp[VR][i][3]),2)); // dE 1976 high speed
	}
	var delta = 1000.0;
	var deltaNum = 0;
	for (var i=0; i<VRI; i++) {
		if (deltaE[i] < delta) {
			delta = deltaE[i];
			deltaNum = i;
		}
	}
	PantoneName = psp[VR][deltaNum][0];
	if (VR < 8) {
	CII = "CII = "+psp[VR][deltaNum][4];
	} else {
		CII = "";
	}
  myWin.document.writeln('<tr><td>Spot '+nameSpottoOut+'</td><td>'+VRP+PantoneName+'&emsp;&emsp;ΔE = '+delta.toFixed(1)+'&emsp;&emsp;'+CII+'</td></tr>');
  myWin.document.writeln('<tr><td>Hex</td><td>'+allhex+'</td></tr>');
	var hexTDout = hexTD;
	hexTDout.splice(12,1);
  myWin.document.writeln('<tr><td>Палитра</td><td>'+hexTDout.join()+'</td></tr>');
  myWin.document.writeln('<tr><td>Хроматическая адаптация</td><td>'+chadtoOut+'</td></tr>');
  myWin.document.writeln('<tr><td>Опорный белый Lab</td><td>'+refWhitetoOut+'</td></tr>');
  var gammaOut = Gamma;
  if (gammaOut == -2.2) {gammaOut = "sRGB";}
  myWin.document.writeln('<tr><td>Gamma RGB</td><td>'+gammaOut+'</td></tr>');
  myWin.document.writeln('<tr><td>RGB gamut mapping</td><td>'+mapping_selector+'</td></tr>');
  myWin.document.writeln('<tr><td>HVS gamut clipping</td><td>'+clipping_selector+'</td></tr>');
  
  
  myWin.document.writeln('<tr><td class=\'white\'><a href="https://color.totalh.net/?'+Lab.L.toFixed(2)+'&'+Lab.a.toFixed(2)+'&'+Lab.b.toFixed(2)+'&'+document.converter.RefWhite.selectedIndex+'&'+document.converter.RGBModel.selectedIndex+'&'+document.converter.Gamma.selectedIndex+'&'+document.converter.Adaptation.selectedIndex+'&'+FRP+'&'+VR+'&'+clipping_selector+'&'+mapping_selector+'&'+Har+'" class="linkst">Гиперссылка</a></td><td>https://color.totalh.net/?'+Lab.L.toFixed(2)+'&'+Lab.a.toFixed(2)+'&'+Lab.b.toFixed(2)+'&'+document.converter.RefWhite.selectedIndex+'&'+document.converter.RGBModel.selectedIndex+'&'+document.converter.Gamma.selectedIndex+'&'+document.converter.Adaptation.selectedIndex+'&'+FRP+'&'+VR+'&'+clipping_selector+'&'+mapping_selector+'&'+Har+'</td></tr>');
  myWin.document.writeln("<tr><td>&emsp;</td></tr></table>");
 // myWin.document.writeln("<p class='white'></p>");
  

  
  
  myWin.document.writeln("<br><br><br><br><script language='JavaScript'>");
  myWin.document.writeln("function closeIt() {close();}");
  myWin.document.writeln("</script><center><form><input type=button class='fixedButton' value='Close' onClick='closeIt()'></form></center>");
  myWin.document.writeln("</body></html>");
  myWin.document.close();  
}