const D2R = Math.PI/180;

function lon_adj(lon) {
	const sign = (lon>=0)?1:-1;

	while ( lon > Math.PI || lon <= -Math.PI)
		lon -= 2*Math.PI * sign;
	return lon;
}

//Format a degrees value. x=value in radians
function deg (x, no_paren=false, dec=7) {
  const val  = Math.round(x/D2R*10**dec)/10**dec;
  const str = parseFloat(val.toFixed(dec));
  if (x >=0 || no_paren)
    return str+"^\\circ";
  else
    return "("+str+"^\\circ)";
}

//convert a DMS string to radians. 
function dms2r(str) {
  const sign = (str.search(/S|W|-/i) == -1)?1 : -1;

  let result = str.match(/([0-9]+)[\xb0|D]([0-9]+)'([0-9]+\.?[0-9]*)/);
  if (result.length == 4) {
    return (+result[1]+result[2]/60.+result[3]/3600.)*sign*D2R;
  }
  result = str.match(/([0-9]+)[\xb0|D]([0-9]+\.?[0-9]*)/);
  if (result.length == 3) {
    return (+result[1]+result[2]/60.)*sign*D2R;
  }
  result = str.match(/[0-9]+\.?[0-9]*/);
  if (result.length == 1) {
    return result[1]*sign*D2R;
  }
  return 0.;
}

function r2dms(val, dec=4) {
  val /= D2R;
  const sign = val<0?-1:1;
  val = Math.abs(val);
  let dd = Math.floor(val);
  val -= dd;
  val *= 60;
  const mm = Math.floor(val);
  const mm_str = mm.toFixed(0).padStart(2, '0');
  const ss = (val-mm)*60;
  dd *= sign;
  const ss_str = ss.toFixed(dec).padStart(dec+3, '0');
  return dd.toFixed(0)+"^\\circ"+mm_str+"'"+ss_str+"''";
}

//format a number. x=number, dec=number of decimals (0 for default)
function fmt (x, no_paren=false, dec=7) {
  if (dec == 0) {
    if (x > 0 || no_paren)
      return  (x == Math.trunc(x))?parseFloat(x*1).toFixed(1) : x;
    else
      return "(" + ((x == Math.trunc(x))?parseFloat(x*1).toFixed(1) : x) + ")";
  }
  if (x >=0 || no_paren)
    return parseFloat(x*1).toFixed(dec);
  else
    return "("+parseFloat(x*1).toFixed(dec)+")";
}
