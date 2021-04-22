var n = true;
var e = true;
function checkName() {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "Validation", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('username=' + document.getElementById('username').value);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            if (this.response == "Username already exists") {
                console.log("failed");
                document.getElementById('displayError').innerHTML = 'Username already exists';
                document.getElementById("submit").disabled = true;
                n = false;
            } else {
                console.log("succeed");
                document.getElementById('displayError').innerHTML = 'This username can be used';
                document.getElementById('displayError').value = 'This username can be used';
                n = true;
                if (e)
                    document.getElementById("submit").disabled = false;
            }
        }


    };
}

function checkEmail() {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "Validation", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('email=' + document.getElementById('email').value);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            if (this.response == "Email already exists") {
                console.log("failedE");
                document.getElementById('displayErrorEmail').innerHTML = 'Email already exists';
                document.getElementById("submit").disabled = true;
                e = false;
            } else {
                console.log("succeedE");
                document.getElementById('displayErrorEmail').innerHTML = 'This email can be used';
                e = true;
                if (n)
                    document.getElementById("submit").disabled = false;
            }
        }



    };
}



function Register() {
    var un = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pw = document.getElementById("pwd").value;
    var name = document.getElementById("name").value;
    var surn = document.getElementById("Surname").value;
    var BD = document.querySelector('input[type="date"]').value;
    var country = document.getElementById("country").value;
    var town = document.getElementById("Town").value;
    var work = document.getElementById("Work").value;
    var interests = document.getElementById("Interests").value;
    var info = document.getElementById("info").value;
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "SignUp", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('username=' + un + '&email=' + email + '&password=' + pw + '&name=' + name + '&surname=' + surn + '&birthday=' + BD
            + '&country=' + country + '&town=' + town + '&work=' + work + '&interests=' + interests + '&info=' + info);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {

        }


    };
}

function displaySignUp() {
//removing elements depending where user came from
    var f = document.getElementById("signin");
    f.remove(f);
    var f2 = document.getElementById("divimg2");
    f2.remove(f2);
    var f3 = document.getElementById("formin");
    f3.remove(f3);
    document.write('<body style=\'margin: 0\'>');
    document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
    background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
    document.write('<div id=\"signup\" style=\"position: absolute; left:845px; font-size:50px;\">\n');
    document.write('        Sign-Up\n');
    document.write('        </div>\n');
    document.write('<form id=\"form\" style=\"position:relative; margin:0 auto; width:600px; bottom:-80px\" action=\"SignUp\" method=\"post\">\n');
    document.write('        <label for=\"username\">Username:</label>\n');
    document.write('        <input type=\"text\" id=\"username\" name=\"username\" onblur=\"checkName()\"><span id=\'displayError\'></span><br><br>\n');
    document.write('        <label for=\"email\">email:</label>\n');
    document.write('        <input type=\"text\" id=\"email\" name=\"email\" onblur=\"checkEmail()\"><span id=\'displayErrorEmail\'></span><br><br>\n');
    document.write('        <label for=\"pwd\">Password:</label>\n');
    document.write('        <input type=\"password\" id=\"pwd\" name=\"pwd\"><br><br>\n');
    document.write('        <label for=\"name\">Name:</label>\n');
    document.write('        <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n');
    document.write('        <label for=\"Surname\">Surname:</label>\n');
    document.write('        <input type=\"text\" id=\"Surname\" name=\"surname\"><br><br>\n');
    document.write('        <label for=\"birth\">Birth Date:</label>\n');
    document.write('        <input type=\"date\" id=\"birth\" name=\"birthday\"><br><br>\n');
    document.write('        <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n');
    document.write('        <label for=\"male\">Male</label><br>\n');
    document.write('        <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n');
    document.write('        <label for=\"female\">Female</label><br>\n');
    document.write('        <input type=\"radio\" id=\"other\" name=\"gender\" value=\"other\">\n');
    document.write('        <label for=\"other\">N/A</label><br><br>\n');
    document.write('        <select id=\"country\">\n');
    document.write('            <option value=\"Afghanistan\">Afghanistan</option>\n');
    document.write('            <option value=\"Albania\">Albania</option>\n');
    document.write('            <option value=\"Algeria\">Algeria</option>\n');
    document.write('            <option value=\"American Samoa\">American Samoa</option>\n');
    document.write('            <option value=\"Andorra\">Andorra</option>\n');
    document.write('            <option value=\"Angola\">Angola</option>\n');
    document.write('            <option value=\"Anguilla\">Anguilla</option>\n');
    document.write('            <option value=\"Antartica\">Antarctica</option>\n');
    document.write('            <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n');
    document.write('            <option value=\"Argentina\">Argentina</option>\n');
    document.write('            <option value=\"Armenia\">Armenia</option>\n');
    document.write('            <option value=\"Aruba\">Aruba</option>\n');
    document.write('            <option value=\"Australia\">Australia</option>\n');
    document.write('            <option value=\"Austria\">Austria</option>\n');
    document.write('            <option value=\"Azerbaijan\">Azerbaijan</option>\n');
    document.write('            <option value=\"Bahamas\">Bahamas</option>\n');
    document.write('            <option value=\"Bahrain\">Bahrain</option>\n');
    document.write('            <option value=\"Bangladesh\">Bangladesh</option>\n');
    document.write('            <option value=\"Barbados\">Barbados</option>\n');
    document.write('            <option value=\"Belarus\">Belarus</option>\n');
    document.write('            <option value=\"Belgium\">Belgium</option>\n');
    document.write('            <option value=\"Belize\">Belize</option>\n');
    document.write('            <option value=\"Benin\">Benin</option>\n');
    document.write('            <option value=\"Bermuda\">Bermuda</option>\n');
    document.write('            <option value=\"Bhutan\">Bhutan</option>\n');
    document.write('            <option value=\"Bolivia\">Bolivia</option>\n');
    document.write('            <option value=\"Bosnia and Herzegowina\">Bosnia and Herzegowina</option>\n');
    document.write('            <option value=\"Botswana\">Botswana</option>\n');
    document.write('            <option value=\"Bouvet Island\">Bouvet Island</option>\n');
    document.write('            <option value=\"Brazil\">Brazil</option>\n');
    document.write('            <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n');
    document.write('            <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n');
    document.write('            <option value=\"Bulgaria\">Bulgaria</option>\n');
    document.write('            <option value=\"Burkina Faso\">Burkina Faso</option>\n');
    document.write('            <option value=\"Burundi\">Burundi</option>\n');
    document.write('            <option value=\"Cambodia\">Cambodia</option>\n');
    document.write('            <option value=\"Cameroon\">Cameroon</option>\n');
    document.write('            <option value=\"Canada\">Canada</option>\n');
    document.write('            <option value=\"Cape Verde\">Cape Verde</option>\n');
    document.write('            <option value=\"Cayman Islands\">Cayman Islands</option>\n');
    document.write('            <option value=\"Central African Republic\">Central African Republic</option>\n');
    document.write('            <option value=\"Chad\">Chad</option>\n');
    document.write('            <option value=\"Chile\">Chile</option>\n');
    document.write('            <option value=\"China\">China</option>\n');
    document.write('            <option value=\"Christmas Island\">Christmas Island</option>\n');
    document.write('            <option value=\"Cocos Islands\">Cocos (Keeling) Islands</option>\n');
    document.write('            <option value=\"Colombia\">Colombia</option>\n');
    document.write('            <option value=\"Comoros\">Comoros</option>\n');
    document.write('            <option value=\"Congo\">Congo</option>\n');
    document.write('            <option value=\"Congo\">Congo, the Democratic Republic of the</option>\n');
    document.write('            <option value=\"Cook Islands\">Cook Islands</option>\n');
    document.write('            <option value=\"Costa Rica\">Costa Rica</option>\n');
    document.write('            <option value=\"Cota D\'Ivoire\">Cote d\'Ivoire</option>\n');
    document.write('            <option value=\"Croatia\">Croatia (Hrvatska)</option>\n');
    document.write('            <option value=\"Cuba\">Cuba</option>\n');
    document.write('            <option value=\"Cyprus\">Cyprus</option>\n');
    document.write('            <option value=\"Czech Republic\">Czech Republic</option>\n');
    document.write('            <option value=\"Denmark\">Denmark</option>\n');
    document.write('            <option value=\"Djibouti\">Djibouti</option>\n');
    document.write('            <option value=\"Dominica\">Dominica</option>\n');
    document.write('            <option value=\"Dominican Republic\">Dominican Republic</option>\n');
    document.write('            <option value=\"East Timor\">East Timor</option>\n');
    document.write('            <option value=\"Ecuador\">Ecuador</option>\n');
    document.write('            <option value=\"Egypt\">Egypt</option>\n');
    document.write('            <option value=\"El Salvador\">El Salvador</option>\n');
    document.write('            <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n');
    document.write('            <option value=\"Eritrea\">Eritrea</option>\n');
    document.write('            <option value=\"Estonia\">Estonia</option>\n');
    document.write('            <option value=\"Ethiopia\">Ethiopia</option>');
    document.write('<option value=\"Falkland Islands\">Falkland Islands (Malvinas)</option>\n');
    document.write('            <option value=\"Faroe Islands\">Faroe Islands</option>\n');
    document.write('            <option value=\"Fiji\">Fiji</option>\n');
    document.write('            <option value=\"Finland\">Finland</option>\n');
    document.write('            <option value=\"France\">France</option>\n');
    document.write('            <option value=\"France Metropolitan\">France, Metropolitan</option>\n');
    document.write('            <option value=\"French Guiana\">French Guiana</option>\n');
    document.write('            <option value=\"French Polynesia\">French Polynesia</option>\n');
    document.write('            <option value=\"French Southern Territories\">French Southern Territories</option>\n');
    document.write('            <option value=\"Gabon\">Gabon</option>\n');
    document.write('            <option value=\"Gambia\">Gambia</option>\n');
    document.write('            <option value=\"Georgia\">Georgia</option>\n');
    document.write('            <option value=\"Germany\">Germany</option>\n');
    document.write('            <option value=\"Ghana\">Ghana</option>\n');
    document.write('            <option value=\"Gibraltar\">Gibraltar</option>\n');
    document.write('            <option value=\"Greece\" selected>Greece</option>\n');
    document.write('            <option value=\"Greenland\">Greenland</option>\n');
    document.write('            <option value=\"Grenada\">Grenada</option>\n');
    document.write('            <option value=\"Guadeloupe\">Guadeloupe</option>\n');
    document.write('            <option value=\"Guam\">Guam</option>\n');
    document.write('            <option value=\"Guatemala\">Guatemala</option>\n');
    document.write('            <option value=\"Guinea\">Guinea</option>\n');
    document.write('            <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\n');
    document.write('            <option value=\"Guyana\">Guyana</option>\n');
    document.write('            <option value=\"Haiti\">Haiti</option>\n');
    document.write('            <option value=\"Heard and McDonald Islands\">Heard and Mc Donald Islands</option>\n');
    document.write('            <option value=\"Holy See\">Holy See (Vatican City State)</option>\n');
    document.write('            <option value=\"Honduras\">Honduras</option>\n');
    document.write('            <option value=\"Hong Kong\">Hong Kong</option>\n');
    document.write('            <option value=\"Hungary\">Hungary</option>\n');
    document.write('            <option value=\"Iceland\">Iceland</option>\n');
    document.write('            <option value=\"India\">India</option>\n');
    document.write('            <option value=\"Indonesia\">Indonesia</option>\n');
    document.write('            <option value=\"Iran\">Iran (Islamic Republic of)</option>\n');
    document.write('            <option value=\"Iraq\">Iraq</option>\n');
    document.write('            <option value=\"Ireland\">Ireland</option>\n');
    document.write('            <option value=\"Israel\">Israel</option>\n');
    document.write('            <option value=\"Italy\">Italy</option>\n');
    document.write('            <option value=\"Jamaica\">Jamaica</option>\n');
    document.write('            <option value=\"Japan\">Japan</option>\n');
    document.write('            <option value=\"Jordan\">Jordan</option>\n');
    document.write('            <option value=\"Kazakhstan\">Kazakhstan</option>\n');
    document.write('            <option value=\"Kenya\">Kenya</option>\n');
    document.write('            <option value=\"Kiribati\">Kiribati</option>\n');
    document.write('            <option value=\"Democratic People\'s Republic of Korea\">Korea, Democratic People\'s Republic of</option>\n');
    document.write('            <option value=\"Korea\">Korea, Republic of</option>\n');
    document.write('            <option value=\"Kuwait\">Kuwait</option>\n');
    document.write('            <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n');
    document.write('            <option value=\"Lao\">Lao People\'s Democratic Republic</option>\n');
    document.write('            <option value=\"Latvia\">Latvia</option>\n');
    document.write('            <option value=\"Lebanon\" >Lebanon</option>\n');
    document.write('            <option value=\"Lesotho\">Lesotho</option>\n');
    document.write('            <option value=\"Liberia\">Liberia</option>\n');
    document.write('            <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n');
    document.write('            <option value=\"Liechtenstein\">Liechtenstein</option>\n');
    document.write('            <option value=\"Lithuania\">Lithuania</option>\n');
    document.write('            <option value=\"Luxembourg\">Luxembourg</option>\n');
    document.write('            <option value=\"Macau\">Macau</option>\n');
    document.write('            <option value=\"Macedonia\">Macedonia, The Former Yugoslav Republic of</option>\n');
    document.write('            <option value=\"Madagascar\">Madagascar</option>\n');
    document.write('            <option value=\"Malawi\">Malawi</option>\n');
    document.write('            <option value=\"Malaysia\">Malaysia</option>\n');
    document.write('            <option value=\"Maldives\">Maldives</option>\n');
    document.write('            <option value=\"Mali\">Mali</option>\n');
    document.write('            <option value=\"Malta\">Malta</option>\n');
    document.write('            <option value=\"Marshall Islands\">Marshall Islands</option>\n');
    document.write('            <option value=\"Martinique\">Martinique</option>\n');
    document.write('            <option value=\"Mauritania\">Mauritania</option>\n');
    document.write('            <option value=\"Mauritius\">Mauritius</option>\n');
    document.write('            <option value=\"Mayotte\">Mayotte</option>\n');
    document.write('            <option value=\"Mexico\">Mexico</option>\n');
    document.write('            <option value=\"Micronesia\">Micronesia, Federated States of</option>\n');
    document.write('            <option value=\"Moldova\">Moldova, Republic of</option>\n');
    document.write('            <option value=\"Monaco\">Monaco</option>\n');
    document.write('            <option value=\"Mongolia\">Mongolia</option>\n');
    document.write('            <option value=\"Montserrat\">Montserrat</option>\n');
    document.write('            <option value=\"Morocco\">Morocco</option>\n');
    document.write('            <option value=\"Mozambique\">Mozambique</option>\n');
    document.write('            <option value=\"Myanmar\">Myanmar</option>\n');
    document.write('            <option value=\"Namibia\">Namibia</option>\n');
    document.write('            <option value=\"Nauru\">Nauru</option>\n');
    document.write('            <option value=\"Nepal\">Nepal</option>\n');
    document.write('            <option value=\"Netherlands\">Netherlands</option>\n');
    document.write('            <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n');
    document.write('            <option value=\"New Caledonia\">New Caledonia</option>\n');
    document.write('            <option value=\"New Zealand\">New Zealand</option>\n');
    document.write('            <option value=\"Nicaragua\">Nicaragua</option>\n');
    document.write('            <option value=\"Niger\">Niger</option>\n');
    document.write('            <option value=\"Nigeria\">Nigeria</option>\n');
    document.write('            <option value=\"Niue\">Niue</option>\n');
    document.write('            <option value=\"Norfolk Island\">Norfolk Island</option>\n');
    document.write('            <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n');
    document.write('            <option value=\"Norway\">Norway</option>\n');
    document.write('            <option value=\"Oman\">Oman</option>\n');
    document.write('            <option value=\"Pakistan\">Pakistan</option>\n');
    document.write('            <option value=\"Palau\">Palau</option>\n');
    document.write('            <option value=\"Panama\">Panama</option>\n');
    document.write('            <option value=\"Papua New Guinea\">Papua New Guinea</option>\n');
    document.write('            <option value=\"Paraguay\">Paraguay</option>\n');
    document.write('            <option value=\"Peru\">Peru</option>\n');
    document.write('            <option value=\"Philippines\">Philippines</option>\n');
    document.write('            <option value=\"Pitcairn\">Pitcairn</option>\n');
    document.write('            <option value=\"Poland\">Poland</option>\n');
    document.write('            <option value=\"Portugal\">Portugal</option>\n');
    document.write('            <option value=\"Puerto Rico\">Puerto Rico</option>\n');
    document.write('            <option value=\"Qatar\">Qatar</option>\n');
    document.write('            <option value=\"Reunion\">Reunion</option>\n');
    document.write('            <option value=\"Romania\">Romania</option>\n');
    document.write('            <option value=\"Russia\">Russian Federation</option>\n');
    document.write('            <option value=\"Rwanda\">Rwanda</option>\n');
    document.write('            <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option> \n');
    document.write('            <option value=\"Saint LUCIA\">Saint LUCIA</option>\n');
    document.write('            <option value=\"Saint Vincent\">Saint Vincent and the Grenadines</option>\n');
    document.write('            <option value=\"Samoa\">Samoa</option>\n');
    document.write('            <option value=\"San Marino\">San Marino</option>\n');
    document.write('            <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option> \n');
    document.write('            <option value=\"Saudi Arabia\">Saudi Arabia</option>\n');
    document.write('            <option value=\"Senegal\">Senegal</option>\n');
    document.write('            <option value=\"Seychelles\">Seychelles</option>\n');
    document.write('            <option value=\"Sierra\">Sierra Leone</option>\n');
    document.write('            <option value=\"Singapore\">Singapore</option>\n');
    document.write('            <option value=\"Slovakia\">Slovakia (Slovak Republic)</option>\n');
    document.write('            <option value=\"Slovenia\">Slovenia</option>\n');
    document.write('            <option value=\"Solomon Islands\">Solomon Islands</option>\n');
    document.write('            <option value=\"Somalia\">Somalia</option>\n');
    document.write('            <option value=\"South Africa\">South Africa</option>\n');
    document.write('            <option value=\"South Georgia\">South Georgia and the South Sandwich Islands</option>\n');
    document.write('            <option value=\"Span\">Spain</option>\n');
    document.write('            <option value=\"SriLanka\">Sri Lanka</option>\n');
    document.write('            <option value=\"St. Helena\">St. Helena</option>\n');
    document.write('            <option value=\"St. Pierre and Miguelon\">St. Pierre and Miquelon</option>\n');
    document.write('            <option value=\"Sudan\">Sudan</option>\n');
    document.write('            <option value=\"Suriname\">Suriname</option>\n');
    document.write('            <option value=\"Svalbard\">Svalbard and Jan Mayen Islands</option>\n');
    document.write('            <option value=\"Swaziland\">Swaziland</option>\n');
    document.write('            <option value=\"Sweden\">Sweden</option>\n');
    document.write('            <option value=\"Switzerland\">Switzerland</option>\n');
    document.write('            <option value=\"Syria\">Syrian Arab Republic</option>\n');
    document.write('            <option value=\"Taiwan\">Taiwan, Province of China</option>\n');
    document.write('            <option value=\"Tajikistan\">Tajikistan</option>\n');
    document.write('            <option value=\"Tanzania\">Tanzania, United Republic of</option>\n');
    document.write('            <option value=\"Thailand\">Thailand</option>\n');
    document.write('            <option value=\"Togo\">Togo</option>\n');
    document.write('            <option value=\"Tokelau\">Tokelau</option>\n');
    document.write('            <option value=\"Tonga\">Tonga</option>\n');
    document.write('            <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n');
    document.write('            <option value=\"Tunisia\">Tunisia</option>\n');
    document.write('            <option value=\"Turkey\">Turkey</option>\n');
    document.write('            <option value=\"Turkmenistan\">Turkmenistan</option>\n');
    document.write('            <option value=\"Turks and Caicos\">Turks and Caicos Islands</option>\n');
    document.write('            <option value=\"Tuvalu\">Tuvalu</option>\n');
    document.write('            <option value=\"Uganda\">Uganda</option>\n');
    document.write('            <option value=\"Ukraine\">Ukraine</option>\n');
    document.write('            <option value=\"United Arab Emirates\">United Arab Emirates</option>\n');
    document.write('            <option value=\"United Kingdom\">United Kingdom</option>\n');
    document.write('            <option value=\"United States\">United States</option>\n');
    document.write('            <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n');
    document.write('            <option value=\"Uruguay\">Uruguay</option>\n');
    document.write('            <option value=\"Uzbekistan\">Uzbekistan</option>\n');
    document.write('            <option value=\"Vanuatu\">Vanuatu</option>\n');
    document.write('            <option value=\"Venezuela\">Venezuela</option>\n');
    document.write('            <option value=\"Vietnam\">Viet Nam</option>\n');
    document.write('            <option value=\"Virgin Islands (British)\">Virgin Islands (British)</option>\n');
    document.write('            <option value=\"Virgin Islands (U.S)\">Virgin Islands (U.S.)</option>\n');
    document.write('            <option value=\"Wallis and Futana Islands\">Wallis and Futuna Islands</option>\n');
    document.write('            <option value=\"Western Sahara\">Western Sahara</option>\n');
    document.write('            <option value=\"Yemen\">Yemen</option>\n');
    document.write('            <option value=\"Serbia\">Serbia</option>\n');
    document.write('            <option value=\"Zambia\">Zambia</option>\n');
    document.write('            <option value=\"Zimbabwe\">Zimbabwe</option>\n');
    document.write('        </select>\n');
    document.write('        <label for=\"Town\">Town:</label>\n');
    document.write('        <input type=\"text\" id=\"Town\" name=\"town\"><br><br>\n');
    document.write('        <label for=\"Work\">Work:</label>\n');
    document.write('        <input type=\"text\" id=\"Work\" name=\"work\"><br><br>\n');
    document.write('        <label for=\"Interests\">Interests:</label>\n');
    document.write('        <input type=\"text\" id=\"Interests\" name=\"interests\"><br><br>\n');
    document.write('        <label>General Information:</label>\n');
    document.write('        <textarea id=\"info\" name=\"message\" rows=\"10\" cols=\"30\"></textarea><br><br>');
    document.write('<button type=\"button\" id=\"submit\" onclick=\"Register(); SignInPage()\">SignUp</button>');
    document.write('</form>');
    camefromsignup = true;
}
var camefromsignup = false;
var camefromsignin = false;
var camefrominfo = false;
var camefromupdate = false;
//SignIn or Sign Up page
function SignInPage() {
    //removing elements depending where user came from
    if (camefromsignup == true) {
        var f = document.getElementById("form");
        f.remove(f);
        var f2 = document.getElementById("signup");
        f2.remove(f2);
        var f3 = document.getElementById("divimg");
        f3.remove(f3);
        camefromsignup = true;
    }
    if (camefromsignin == true) {
        var a = document.getElementById("divimg");
        a.remove(a);
        var a2 = document.getElementById("PostDescription");
        a2.remove(a2);
        var a3 = document.getElementById("myFile");
        if (a3 != null)
            a3.remove(a3);
        var a4 = document.getElementById("so");
        a4.remove(a4);
        var a5 = document.getElementById("su");
        a5.remove(a5);
        var a6 = document.getElementById("du");
        if (a6 != null)
            a6.remove(a6);
        var a7 = document.getElementById("si");
        if (a7 != null)
            a7.remove(a7);
        var a8 = document.getElementById("cp");
        a8.remove(a8);
        camefromsignin = false;
    }
    if (camefrominfo == true) {
        var a = document.getElementById("divimg");
        if (a != null)
            a.remove(a);
        a2 = document.getElementById("divIN");
        if (a2 != null)
            a2.remove(a2);
        var a3 = document.getElementById("sp");
        if (a3 != null)
            a3.remove(a3);
        var a4 = document.getElementById("myFile");
        if (a4 != null)
            a4.remove(a4);
        var a5 = document.getElementById("PostDescription");
        if (a5 != null)
            a5.remove(a5);
        var a6 = document.getElementById("so");
        if (a6 != null)
            a6.remove(a6);
        var a7 = document.getElementById("cp");
        if (a7 != null)
            a7.remove(a7);
        camefrominfo = false;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json';
    xhttp.open('POST', "PostManagment", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send('code=' + "GetUserNames");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(xhttp.response);
            users = xhttp.response;
            localStorage.setItem("users", JSON.stringify(users));
        }

    }
    document.write('<body style=\'margin: 0\'>');
    document.write('<div id="\divimg2\" style=\"position: absolute; height:937px; width: 100%; \n\
    background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
    document.write('<div id=\"signin\" style=\"position: absolute; left:845px; font-size:50px;\">\n');
    document.write('        Sign-In\n');
    document.write('        </div>\n');
    document.write('        \n');
    document.write('        <form id=\"formin\">');
    document.write('        <label for=\"username\">Username:</label>\n');
    document.write('        <input type=\"text\" id=\"username\" name=\"username\" style=\"position: absolute; left:840px; bottom:700px\"><div style=\"position: absolute; left:767px; bottom:701px\">Username:</div>\n');
    document.write('        <label for=\"pwd\">Password:</label>\n');
    document.write('        <input type=\"password\" id=\"pwd\" name=\"pwd\" style=\"position: absolute; left:840px; bottom:670px\"><div style=\"position: absolute; left:770px; bottom:671px\">Password:</div><span style=\"position: absolute; left:1020px; bottom: 670px\" id=\'displayWrongPassword\'></span>\n');
    document.write('        <button type=\'button\' style=\"position: absolute; left:875px; bottom:630px; width: 100px\" onclick=\'SignInPageForPosts()\'>Sign-In</button>');
    document.write('        </form>');
    document.write('        <div id=\"questionForSignup\" style=\"position: absolute; left:840px; bottom:610px\">don\'t have an account yet?</div>\n');
    document.write('        <button id=\"signupbtn\" style=\"position: absolute; left:875px; bottom:580px; width: 100px\" onClick=\"displaySignUp()\">Sign-Up</button>');
}
var usernameForUpdate = "";
var users = "users";
//When Signed In shows info, posts and buttons
function ShowInfo() {
    document.write('<button id=\"du\" style=\"position: absolute; bottom:865px; left:1800px\" onclick=\"displayUpdate()\">UpdateInfo</button>');
    var a3 = document.getElementById("sp");
    if (a3 != null)
        a3.remove(a3);
    var rem1 = document.getElementById("showprofile");
    if (rem1 != null)
        rem1.remove(rem1);
    var rem2 = document.getElementById("textspan");
    if (rem2 != null)
        rem2.remove(rem2);
    var rem3 = document.getElementById("searchspan");
    if (rem3 != null)
        rem3.remove(rem3);
    var rem4 = document.getElementById("user");
    if (rem4 != null)
        rem4.remove(rem4);
    var rem5 = document.getElementById("users");
    if (rem5 != null)
        rem5.remove(rem5);
    var rem6 = document.getElementById("users");
    if (rem6 != null)
        rem6.parentNode.removeChild(rem6);
    //Request for Username cookie
    var cookie = new XMLHttpRequest();
    cookie.responseType = 'text';
    cookie.open('POST', "Cookies", true);
    cookie.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    cookie.send('code=' + "getUser");
    cookie.onreadystatechange = function () {
        if (cookie.readyState == 4) {
            //Request for Showing Info
            var req2 = new XMLHttpRequest();
            req2.responseType = 'json';
            req2.open('POST', "SignIn", true);
            req2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            var f = document.getElementById("si");
            if (f != null)
                f.remove(f);
            req2.send('username=' + cookie.response);
            req2.onreadystatechange = function () {
                if (req2.readyState == 4) {
                    //removing elements depending where user came from
                    document.write('<div style=\"position: absolute; font-size: 40px\" id=\"divIN\"></div>\n');
                    document.getElementById("divIN").innerHTML = "Username: " + (req2.response['userName'] + "<br>" + "Email: " + req2.response['email'] + "<br>" + "Password: " + req2.response['password']
                            + "<br>" + "Name: " + req2.response['firstName'] + "<br>" + "Surname: " + req2.response['lastName'] + "<br>" + "BirthDate: " + req2.response['birthDate'] + "<br>" + "RegisteredSince: " + req2.response['registeredSince']
                            + "<br>" + "Gender: " + req2.response['gender'] + "<br>" + "Country: " + req2.response['country'] + "<br>" + "Occupation: " + req2.response['occupation'] + "<br>" + "Interests: " + req2.response['interests']
                            + "<br>" + "Town: " + req2.response['town'] + "<br>" + "Info: " + req2.response['info'] + "<br>" + "UserID: " + req2.response['userID']);
                    document.write('<button id=\"sp\" style=\"position: absolute; bottom:528px; left:1800px\" onclick=\"goToMainScreen()\">Main Screen</button>');
                    camefrominfo = true;
                    var req = new XMLHttpRequest();
                    req.responseType = 'json';
                    req.open('POST', "StateOfPage", true);
                    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    req.send('state=' + "Info");
                    for (i = 0; i < 10; i++) {
                        var elem = document.getElementById("div" + i);
                        if (elem != null)
                            elem.parentNode.removeChild(elem);
                    }
                    var req3 = new XMLHttpRequest();
                    req3.responseType = 'json';
                    req3.open('POST', "PostManagment", true);
                    req3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    req3.send('code=' + "ShowSelf");
                    var bot = 840;
                    req3.onreadystatechange = function () {
                        for (i = 0; i < 10; i++) {
                            if (req3.response[i] != null) {

                                document.write('<div style=\"position: absolute; width:500px; left:850px; border: 2px solid powderblue; bottom:' + bot + 'px; font-size: 15px;background-color:white\" id=\"sec' + i + '\"></div>\n');
                                document.getElementById("sec" + i).innerHTML += "Description: " + req3.response[i]['description'] + " <tr><br>";
                                if (req3.response[i]['imageURL'] != null && req3.response[i]['imageURL'] != "")
                                {
                                    var img = document.createElement("img");
                                    img.src = req3.response[i]['imageURL'];
                                    img.style.width = "50";
                                    img.style.height = "50";
                                    document.getElementById("sec" + i).appendChild(img);
                                }
                                if (req3.response[i]['imageBase64'] != null && req3.response[i]['imageBase64'] != "")
                                {
                                    var img = document.createElement("img");
                                    img.src = req3.response[i]['imageBase64'];
                                    img.style.width = "50";
                                    img.style.height = "50";
                                    document.getElementById("sec" + i).appendChild(img);
                                }
                                document.getElementById("sec" + i).innerHTML += "<br>" + "Created At: " + req3.response[i]['createdAt'] + "<br>" + "<br>";
                                var button = document.createElement("button");
                                button.innerHTML = "Delete Post";
                                const postID = req3.response[i]['postID'];
                                button.id = postID;
                                document.getElementById("sec" + i).appendChild(button);
                                button.addEventListener("click", function () {
                                    var req = new XMLHttpRequest();
                                    req.responseType = 'json';
                                    req.open('POST', "PostManagment", true);
                                    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                                    req.send('code=' + "DeletePost" + '&postID=' + postID);
                                    req.onreadystatechange = function () {
                                        if (this.readyState == 4)
                                        {
                                            document.getElementById(postID).parentNode.remove();
                                            console.log(req.response);
                                        }
                                    }
                                });
                                bot = bot - 150;
                            }
                        }
                    };
                }
            };
        }
    };
}


function showAllUsers() {

    var users = JSON.parse(localStorage.getItem("users"));
    var counter = 0;
    var a = document.getElementById("divIN");
    if (a != null)
        a.remove(a);
    var a2 = document.getElementById("divimg");
    if (a2 != null)
        a2.remove(a2);
    var rem2 = document.getElementById("textspan");
    if (rem2 != null)
        rem2.remove(rem2);
    var rem3 = document.getElementById("searchspan");
    if (rem3 != null)
        rem3.remove(rem3);
    var rem4 = document.getElementById("user");
    if (rem4 != null)
        rem4.remove(rem4);
    var rem5 = document.getElementById("users");
    if (rem5 != null)
        rem5.remove(rem5);
    var rem6 = document.getElementById("users");
    if (rem6 != null)
        rem6.parentNode.removeChild(rem6);
    document.write('<body style=\'margin: 0\'>');
    document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
            background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
    document.write('<div style=\"position: absolute;color:white; font-size: 40px\" id=\"divIN\"></div>\n');
    for (var i = 0; i < users.length; i++)
    {
        document.getElementById("divIN").innerHTML += users[i] + "<tr>";
        counter++;
        if (counter == 5)
        {
            counter = 0;
            document.getElementById("divIN").innerHTML += "<br>";
        }
    }


    document.write('<button style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
}

function displayUpdate() {
//removing elements depending where user came from
    if (camefrominfo == true) {
        for (i = 0; i < 10; i++) {
            var elem = document.getElementById("div" + i);
            if (elem != null)
                elem.parentNode.removeChild(elem);
        }
        var a = document.getElementById("su");
        if (a != null)
            a.remove(a);
        var a2 = document.getElementById("divIN");
        if (a2 != null)
            a2.remove(a2);
        var a3 = document.getElementById("sp");
        if (a3 != null)
            a3.remove(a3);
        var a4 = document.getElementById("myFile");
        if (a4 != null)
            a4.remove(a4);
        var a5 = document.getElementById("PostDescription");
        if (a5 != null)
            a5.remove(a5);
        var a6 = document.getElementById("so");
        if (a6 != null)
            a6.remove(a6);
        var a7 = document.getElementById("cp");
        if (a7 != null)
            a7.remove(a7);
        var a8 = document.getElementById("divimg");
        if (a8 != null)
            a8.remove(a8);
        var a9 = document.getElementById("showprofile");
        if (a9 != null)
            a9.remove(a9);
        var a10 = document.getElementById("searchspan");
        if (a10 != null)
            a10.remove(a10);
        var a11 = document.getElementById("textspan");
        if (a11 != null)
            a11.remove(a11);
        var a12 = document.getElementById("du");
        if (a12 != null)
            a12.remove(a12);
    }
    if (camefromsignup == true) {
        var f = document.getElementById("form");
        f.remove(f);
        var f2 = document.getElementById("signup");
        f2.remove(f2);
        var f3 = document.getElementById("divimg");
        f3.remove(f3);
        camefromsignup = true;
    }
    if (camefromsignin == true) {
        var a = document.getElementById("divimg");
        if (a != null)
            a.remove(a);
        a2 = document.getElementById("divIN");
        if (a2 != null)
            a2.remove(a2);
        camefromsignin = false;
    }
    document.write('<body style=\'margin: 0\'>');
    document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
    background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
    document.write('<div id=\"signup\" style=\"position: absolute; left:845px; font-size:50px;\">\n');
    document.write('        Update Info\n');
    document.write('        </div>\n');
    document.write('<form id=\"form\" style=\"position:relative; margin:0 auto; width:600px; bottom:-80px\" action=\"UpdateUser\" method=\"post\">\n');
    document.write('        <label for=\"email\">email:</label>\n');
    document.write('        <input type=\"text\" id=\"email\" name=\"email\" onblur=\"checkEmail()\"><span id=\'displayErrorEmail\'></span><br><br>\n');
    document.write('        <label for=\"pwd\">Password:</label>\n');
    document.write('        <input type=\"password\" id=\"pwd\" name=\"pwd\"><br><br>\n');
    document.write('        <label for=\"name\">Name:</label>\n');
    document.write('        <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n');
    document.write('        <label for=\"Surname\">Surname:</label>\n');
    document.write('        <input type=\"text\" id=\"Surname\" name=\"surname\"><br><br>\n');
    document.write('        <label for=\"birth\">Birth Date:</label>\n');
    document.write('        <input type=\"date\" id=\"birth\" name=\"birthday\"><br><br>\n');
    document.write('        <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n');
    document.write('        <label for=\"male\">Male</label><br>\n');
    document.write('        <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n');
    document.write('        <label for=\"female\">Female</label><br>\n');
    document.write('        <input type=\"radio\" id=\"other\" name=\"gender\" value=\"other\">\n');
    document.write('        <label for=\"other\">N/A</label><br><br>\n');
    document.write('        <select id=\"country\">\n');
    document.write('            <option value=\"Afghanistan\">Afghanistan</option>\n');
    document.write('            <option value=\"Albania\">Albania</option>\n');
    document.write('            <option value=\"Algeria\">Algeria</option>\n');
    document.write('            <option value=\"American Samoa\">American Samoa</option>\n');
    document.write('            <option value=\"Andorra\">Andorra</option>\n');
    document.write('            <option value=\"Angola\">Angola</option>\n');
    document.write('            <option value=\"Anguilla\">Anguilla</option>\n');
    document.write('            <option value=\"Antartica\">Antarctica</option>\n');
    document.write('            <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n');
    document.write('            <option value=\"Argentina\">Argentina</option>\n');
    document.write('            <option value=\"Armenia\">Armenia</option>\n');
    document.write('            <option value=\"Aruba\">Aruba</option>\n');
    document.write('            <option value=\"Australia\">Australia</option>\n');
    document.write('            <option value=\"Austria\">Austria</option>\n');
    document.write('            <option value=\"Azerbaijan\">Azerbaijan</option>\n');
    document.write('            <option value=\"Bahamas\">Bahamas</option>\n');
    document.write('            <option value=\"Bahrain\">Bahrain</option>\n');
    document.write('            <option value=\"Bangladesh\">Bangladesh</option>\n');
    document.write('            <option value=\"Barbados\">Barbados</option>\n');
    document.write('            <option value=\"Belarus\">Belarus</option>\n');
    document.write('            <option value=\"Belgium\">Belgium</option>\n');
    document.write('            <option value=\"Belize\">Belize</option>\n');
    document.write('            <option value=\"Benin\">Benin</option>\n');
    document.write('            <option value=\"Bermuda\">Bermuda</option>\n');
    document.write('            <option value=\"Bhutan\">Bhutan</option>\n');
    document.write('            <option value=\"Bolivia\">Bolivia</option>\n');
    document.write('            <option value=\"Bosnia and Herzegowina\">Bosnia and Herzegowina</option>\n');
    document.write('            <option value=\"Botswana\">Botswana</option>\n');
    document.write('            <option value=\"Bouvet Island\">Bouvet Island</option>\n');
    document.write('            <option value=\"Brazil\">Brazil</option>\n');
    document.write('            <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n');
    document.write('            <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n');
    document.write('            <option value=\"Bulgaria\">Bulgaria</option>\n');
    document.write('            <option value=\"Burkina Faso\">Burkina Faso</option>\n');
    document.write('            <option value=\"Burundi\">Burundi</option>\n');
    document.write('            <option value=\"Cambodia\">Cambodia</option>\n');
    document.write('            <option value=\"Cameroon\">Cameroon</option>\n');
    document.write('            <option value=\"Canada\">Canada</option>\n');
    document.write('            <option value=\"Cape Verde\">Cape Verde</option>\n');
    document.write('            <option value=\"Cayman Islands\">Cayman Islands</option>\n');
    document.write('            <option value=\"Central African Republic\">Central African Republic</option>\n');
    document.write('            <option value=\"Chad\">Chad</option>\n');
    document.write('            <option value=\"Chile\">Chile</option>\n');
    document.write('            <option value=\"China\">China</option>\n');
    document.write('            <option value=\"Christmas Island\">Christmas Island</option>\n');
    document.write('            <option value=\"Cocos Islands\">Cocos (Keeling) Islands</option>\n');
    document.write('            <option value=\"Colombia\">Colombia</option>\n');
    document.write('            <option value=\"Comoros\">Comoros</option>\n');
    document.write('            <option value=\"Congo\">Congo</option>\n');
    document.write('            <option value=\"Congo\">Congo, the Democratic Republic of the</option>\n');
    document.write('            <option value=\"Cook Islands\">Cook Islands</option>\n');
    document.write('            <option value=\"Costa Rica\">Costa Rica</option>\n');
    document.write('            <option value=\"Cota D\'Ivoire\">Cote d\'Ivoire</option>\n');
    document.write('            <option value=\"Croatia\">Croatia (Hrvatska)</option>\n');
    document.write('            <option value=\"Cuba\">Cuba</option>\n');
    document.write('            <option value=\"Cyprus\">Cyprus</option>\n');
    document.write('            <option value=\"Czech Republic\">Czech Republic</option>\n');
    document.write('            <option value=\"Denmark\">Denmark</option>\n');
    document.write('            <option value=\"Djibouti\">Djibouti</option>\n');
    document.write('            <option value=\"Dominica\">Dominica</option>\n');
    document.write('            <option value=\"Dominican Republic\">Dominican Republic</option>\n');
    document.write('            <option value=\"East Timor\">East Timor</option>\n');
    document.write('            <option value=\"Ecuador\">Ecuador</option>\n');
    document.write('            <option value=\"Egypt\">Egypt</option>\n');
    document.write('            <option value=\"El Salvador\">El Salvador</option>\n');
    document.write('            <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n');
    document.write('            <option value=\"Eritrea\">Eritrea</option>\n');
    document.write('            <option value=\"Estonia\">Estonia</option>\n');
    document.write('            <option value=\"Ethiopia\">Ethiopia</option>');
    document.write('<option value=\"Falkland Islands\">Falkland Islands (Malvinas)</option>\n');
    document.write('            <option value=\"Faroe Islands\">Faroe Islands</option>\n');
    document.write('            <option value=\"Fiji\">Fiji</option>\n');
    document.write('            <option value=\"Finland\">Finland</option>\n');
    document.write('            <option value=\"France\">France</option>\n');
    document.write('            <option value=\"France Metropolitan\">France, Metropolitan</option>\n');
    document.write('            <option value=\"French Guiana\">French Guiana</option>\n');
    document.write('            <option value=\"French Polynesia\">French Polynesia</option>\n');
    document.write('            <option value=\"French Southern Territories\">French Southern Territories</option>\n');
    document.write('            <option value=\"Gabon\">Gabon</option>\n');
    document.write('            <option value=\"Gambia\">Gambia</option>\n');
    document.write('            <option value=\"Georgia\">Georgia</option>\n');
    document.write('            <option value=\"Germany\">Germany</option>\n');
    document.write('            <option value=\"Ghana\">Ghana</option>\n');
    document.write('            <option value=\"Gibraltar\">Gibraltar</option>\n');
    document.write('            <option value=\"Greece\" selected>Greece</option>\n');
    document.write('            <option value=\"Greenland\">Greenland</option>\n');
    document.write('            <option value=\"Grenada\">Grenada</option>\n');
    document.write('            <option value=\"Guadeloupe\">Guadeloupe</option>\n');
    document.write('            <option value=\"Guam\">Guam</option>\n');
    document.write('            <option value=\"Guatemala\">Guatemala</option>\n');
    document.write('            <option value=\"Guinea\">Guinea</option>\n');
    document.write('            <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\n');
    document.write('            <option value=\"Guyana\">Guyana</option>\n');
    document.write('            <option value=\"Haiti\">Haiti</option>\n');
    document.write('            <option value=\"Heard and McDonald Islands\">Heard and Mc Donald Islands</option>\n');
    document.write('            <option value=\"Holy See\">Holy See (Vatican City State)</option>\n');
    document.write('            <option value=\"Honduras\">Honduras</option>\n');
    document.write('            <option value=\"Hong Kong\">Hong Kong</option>\n');
    document.write('            <option value=\"Hungary\">Hungary</option>\n');
    document.write('            <option value=\"Iceland\">Iceland</option>\n');
    document.write('            <option value=\"India\">India</option>\n');
    document.write('            <option value=\"Indonesia\">Indonesia</option>\n');
    document.write('            <option value=\"Iran\">Iran (Islamic Republic of)</option>\n');
    document.write('            <option value=\"Iraq\">Iraq</option>\n');
    document.write('            <option value=\"Ireland\">Ireland</option>\n');
    document.write('            <option value=\"Israel\">Israel</option>\n');
    document.write('            <option value=\"Italy\">Italy</option>\n');
    document.write('            <option value=\"Jamaica\">Jamaica</option>\n');
    document.write('            <option value=\"Japan\">Japan</option>\n');
    document.write('            <option value=\"Jordan\">Jordan</option>\n');
    document.write('            <option value=\"Kazakhstan\">Kazakhstan</option>\n');
    document.write('            <option value=\"Kenya\">Kenya</option>\n');
    document.write('            <option value=\"Kiribati\">Kiribati</option>\n');
    document.write('            <option value=\"Democratic People\'s Republic of Korea\">Korea, Democratic People\'s Republic of</option>\n');
    document.write('            <option value=\"Korea\">Korea, Republic of</option>\n');
    document.write('            <option value=\"Kuwait\">Kuwait</option>\n');
    document.write('            <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n');
    document.write('            <option value=\"Lao\">Lao People\'s Democratic Republic</option>\n');
    document.write('            <option value=\"Latvia\">Latvia</option>\n');
    document.write('            <option value=\"Lebanon\" >Lebanon</option>\n');
    document.write('            <option value=\"Lesotho\">Lesotho</option>\n');
    document.write('            <option value=\"Liberia\">Liberia</option>\n');
    document.write('            <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n');
    document.write('            <option value=\"Liechtenstein\">Liechtenstein</option>\n');
    document.write('            <option value=\"Lithuania\">Lithuania</option>\n');
    document.write('            <option value=\"Luxembourg\">Luxembourg</option>\n');
    document.write('            <option value=\"Macau\">Macau</option>\n');
    document.write('            <option value=\"Macedonia\">Macedonia, The Former Yugoslav Republic of</option>\n');
    document.write('            <option value=\"Madagascar\">Madagascar</option>\n');
    document.write('            <option value=\"Malawi\">Malawi</option>\n');
    document.write('            <option value=\"Malaysia\">Malaysia</option>\n');
    document.write('            <option value=\"Maldives\">Maldives</option>\n');
    document.write('            <option value=\"Mali\">Mali</option>\n');
    document.write('            <option value=\"Malta\">Malta</option>\n');
    document.write('            <option value=\"Marshall Islands\">Marshall Islands</option>\n');
    document.write('            <option value=\"Martinique\">Martinique</option>\n');
    document.write('            <option value=\"Mauritania\">Mauritania</option>\n');
    document.write('            <option value=\"Mauritius\">Mauritius</option>\n');
    document.write('            <option value=\"Mayotte\">Mayotte</option>\n');
    document.write('            <option value=\"Mexico\">Mexico</option>\n');
    document.write('            <option value=\"Micronesia\">Micronesia, Federated States of</option>\n');
    document.write('            <option value=\"Moldova\">Moldova, Republic of</option>\n');
    document.write('            <option value=\"Monaco\">Monaco</option>\n');
    document.write('            <option value=\"Mongolia\">Mongolia</option>\n');
    document.write('            <option value=\"Montserrat\">Montserrat</option>\n');
    document.write('            <option value=\"Morocco\">Morocco</option>\n');
    document.write('            <option value=\"Mozambique\">Mozambique</option>\n');
    document.write('            <option value=\"Myanmar\">Myanmar</option>\n');
    document.write('            <option value=\"Namibia\">Namibia</option>\n');
    document.write('            <option value=\"Nauru\">Nauru</option>\n');
    document.write('            <option value=\"Nepal\">Nepal</option>\n');
    document.write('            <option value=\"Netherlands\">Netherlands</option>\n');
    document.write('            <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n');
    document.write('            <option value=\"New Caledonia\">New Caledonia</option>\n');
    document.write('            <option value=\"New Zealand\">New Zealand</option>\n');
    document.write('            <option value=\"Nicaragua\">Nicaragua</option>\n');
    document.write('            <option value=\"Niger\">Niger</option>\n');
    document.write('            <option value=\"Nigeria\">Nigeria</option>\n');
    document.write('            <option value=\"Niue\">Niue</option>\n');
    document.write('            <option value=\"Norfolk Island\">Norfolk Island</option>\n');
    document.write('            <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n');
    document.write('            <option value=\"Norway\">Norway</option>\n');
    document.write('            <option value=\"Oman\">Oman</option>\n');
    document.write('            <option value=\"Pakistan\">Pakistan</option>\n');
    document.write('            <option value=\"Palau\">Palau</option>\n');
    document.write('            <option value=\"Panama\">Panama</option>\n');
    document.write('            <option value=\"Papua New Guinea\">Papua New Guinea</option>\n');
    document.write('            <option value=\"Paraguay\">Paraguay</option>\n');
    document.write('            <option value=\"Peru\">Peru</option>\n');
    document.write('            <option value=\"Philippines\">Philippines</option>\n');
    document.write('            <option value=\"Pitcairn\">Pitcairn</option>\n');
    document.write('            <option value=\"Poland\">Poland</option>\n');
    document.write('            <option value=\"Portugal\">Portugal</option>\n');
    document.write('            <option value=\"Puerto Rico\">Puerto Rico</option>\n');
    document.write('            <option value=\"Qatar\">Qatar</option>\n');
    document.write('            <option value=\"Reunion\">Reunion</option>\n');
    document.write('            <option value=\"Romania\">Romania</option>\n');
    document.write('            <option value=\"Russia\">Russian Federation</option>\n');
    document.write('            <option value=\"Rwanda\">Rwanda</option>\n');
    document.write('            <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option> \n');
    document.write('            <option value=\"Saint LUCIA\">Saint LUCIA</option>\n');
    document.write('            <option value=\"Saint Vincent\">Saint Vincent and the Grenadines</option>\n');
    document.write('            <option value=\"Samoa\">Samoa</option>\n');
    document.write('            <option value=\"San Marino\">San Marino</option>\n');
    document.write('            <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option> \n');
    document.write('            <option value=\"Saudi Arabia\">Saudi Arabia</option>\n');
    document.write('            <option value=\"Senegal\">Senegal</option>\n');
    document.write('            <option value=\"Seychelles\">Seychelles</option>\n');
    document.write('            <option value=\"Sierra\">Sierra Leone</option>\n');
    document.write('            <option value=\"Singapore\">Singapore</option>\n');
    document.write('            <option value=\"Slovakia\">Slovakia (Slovak Republic)</option>\n');
    document.write('            <option value=\"Slovenia\">Slovenia</option>\n');
    document.write('            <option value=\"Solomon Islands\">Solomon Islands</option>\n');
    document.write('            <option value=\"Somalia\">Somalia</option>\n');
    document.write('            <option value=\"South Africa\">South Africa</option>\n');
    document.write('            <option value=\"South Georgia\">South Georgia and the South Sandwich Islands</option>\n');
    document.write('            <option value=\"Span\">Spain</option>\n');
    document.write('            <option value=\"SriLanka\">Sri Lanka</option>\n');
    document.write('            <option value=\"St. Helena\">St. Helena</option>\n');
    document.write('            <option value=\"St. Pierre and Miguelon\">St. Pierre and Miquelon</option>\n');
    document.write('            <option value=\"Sudan\">Sudan</option>\n');
    document.write('            <option value=\"Suriname\">Suriname</option>\n');
    document.write('            <option value=\"Svalbard\">Svalbard and Jan Mayen Islands</option>\n');
    document.write('            <option value=\"Swaziland\">Swaziland</option>\n');
    document.write('            <option value=\"Sweden\">Sweden</option>\n');
    document.write('            <option value=\"Switzerland\">Switzerland</option>\n');
    document.write('            <option value=\"Syria\">Syrian Arab Republic</option>\n');
    document.write('            <option value=\"Taiwan\">Taiwan, Province of China</option>\n');
    document.write('            <option value=\"Tajikistan\">Tajikistan</option>\n');
    document.write('            <option value=\"Tanzania\">Tanzania, United Republic of</option>\n');
    document.write('            <option value=\"Thailand\">Thailand</option>\n');
    document.write('            <option value=\"Togo\">Togo</option>\n');
    document.write('            <option value=\"Tokelau\">Tokelau</option>\n');
    document.write('            <option value=\"Tonga\">Tonga</option>\n');
    document.write('            <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n');
    document.write('            <option value=\"Tunisia\">Tunisia</option>\n');
    document.write('            <option value=\"Turkey\">Turkey</option>\n');
    document.write('            <option value=\"Turkmenistan\">Turkmenistan</option>\n');
    document.write('            <option value=\"Turks and Caicos\">Turks and Caicos Islands</option>\n');
    document.write('            <option value=\"Tuvalu\">Tuvalu</option>\n');
    document.write('            <option value=\"Uganda\">Uganda</option>\n');
    document.write('            <option value=\"Ukraine\">Ukraine</option>\n');
    document.write('            <option value=\"United Arab Emirates\">United Arab Emirates</option>\n');
    document.write('            <option value=\"United Kingdom\">United Kingdom</option>\n');
    document.write('            <option value=\"United States\">United States</option>\n');
    document.write('            <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n');
    document.write('            <option value=\"Uruguay\">Uruguay</option>\n');
    document.write('            <option value=\"Uzbekistan\">Uzbekistan</option>\n');
    document.write('            <option value=\"Vanuatu\">Vanuatu</option>\n');
    document.write('            <option value=\"Venezuela\">Venezuela</option>\n');
    document.write('            <option value=\"Vietnam\">Viet Nam</option>\n');
    document.write('            <option value=\"Virgin Islands (British)\">Virgin Islands (British)</option>\n');
    document.write('            <option value=\"Virgin Islands (U.S)\">Virgin Islands (U.S.)</option>\n');
    document.write('            <option value=\"Wallis and Futana Islands\">Wallis and Futuna Islands</option>\n');
    document.write('            <option value=\"Western Sahara\">Western Sahara</option>\n');
    document.write('            <option value=\"Yemen\">Yemen</option>\n');
    document.write('            <option value=\"Serbia\">Serbia</option>\n');
    document.write('            <option value=\"Zambia\">Zambia</option>\n');
    document.write('            <option value=\"Zimbabwe\">Zimbabwe</option>\n');
    document.write('        </select>\n');
    document.write('        <label for=\"Town\">Town:</label>\n');
    document.write('        <input type=\"text\" id=\"Town\" name=\"town\"><br><br>\n');
    document.write('        <label for=\"Work\">Work:</label>\n');
    document.write('        <input type=\"text\" id=\"Work\" name=\"work\"><br><br>\n');
    document.write('        <label for=\"Interests\">Interests:</label>\n');
    document.write('        <input type=\"text\" id=\"Interests\" name=\"interests\"><br><br>\n');
    document.write('        <label>General Information:</label>\n');
    document.write('        <textarea id=\"info\" name=\"message\" rows=\"10\" cols=\"30\"></textarea><br><br>');
    document.write('<button type=\"button\" id=\"submit\" onclick=\"Update(); ShowInfo()\">Update</button>');
    document.write('</form>');
}

function Update() {
    camefromupdate = true;
    var email = document.getElementById("email").value;
    var pw = document.getElementById("pwd").value;
    var name = document.getElementById("name").value;
    var surn = document.getElementById("Surname").value;
    var BD = document.querySelector('input[type="date"]').value;
    var country = document.getElementById("country").value;
    var town = document.getElementById("Town").value;
    var work = document.getElementById("Work").value;
    var interests = document.getElementById("Interests").value;
    var info = document.getElementById("info").value;
    var req = new XMLHttpRequest();
    var cookies = new XMLHttpRequest();
    cookies.responseType = 'text';
    cookies.open('POST', "Cookies", true);
    cookies.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    cookies.send('code=' + "getUser");
    cookies.onreadystatechange = function () {
        if (cookies.readyState == 4) {
            req.responseType = 'json';
            req.open('POST', "UpdateUser", true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            req.send('usernameForUpdate=' + cookies.response + '&email=' + email + '&password=' + pw + '&name=' + name + '&surname=' + surn + '&birthday=' + BD
                    + '&country=' + country + '&town=' + town + '&work=' + work + '&interests=' + interests + '&info=' + info);
        }
    };
    var f = document.getElementById("signup");
    if (f != null)
        f.remove(f);
    var f2 = document.getElementById("form");
    if (f2 != null)
        f2.remove(f2);
    document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
    document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showAllUsers()\">ShowUsers</button>');
    document.write('<button id=\"du\" style=\"position: absolute; bottom:865px; left:1800px\" onclick=\"displayUpdate()\">UpdateInfo</button>');
    document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:1500px\" id=\"PostDescription\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
    document.write('<input  style=\"position: absolute; bottom:560px; left:1500px\" type=\"file\" id=\"myFile\" name=\"filename\">\n');
    document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile()\">Search</button>');
    document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
    document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>')
    document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" style=\"position: fixed; bottom:430px; left:1700px\" oninput=\"autoComplete()\" name=\"user\">\n');
    document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
    document.write('</select>');
}

function CheckSession() {
    var req = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "SessionServlet", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('code=' + "0");
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.response == null) {
                SignInPage();

            } else if (req.response == "Invalid")
            {
                SignInPage();
            } else if (req.response.state == "Info") {
                document.write('<body style=\'margin: 0\'>');
                document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
                        background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
                ShowInfo();
                document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
                document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showAllUsers()\">ShowUsers</button>');
                document.write('<button id=\"du\" style=\"position: absolute; bottom:865px; left:1800px\" onclick=\"displayUpdate()\">UpdateInfo</button>');
                document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:1500px\" id=\"PostDescription\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
                document.write('<input id=\"cp\" type=\"submit\" style=\"position: absolute; bottom:560px; left:1800px\" value="CreatePost" onclick=\"createPost()\">');
                document.write('<input  style=\"position: absolute; bottom:560px; left:1500px\" type=\"file\" id=\"myFile\" name=\"filename\" onchange=\"readURL(this);\" >\n');
                document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile()\">Search</button>');
                document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
                document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>')
                document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" style=\"position: fixed; bottom:430px; left:1700px\" oninput=\"autoComplete()\" name=\"user\">\n');
                document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
                document.write('</select>');
                camefrominfo = true;
            } else if (req.response.state == "Posts") {
                document.write('<body style=\'margin: 0\'>');
                document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
                        background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
                showPostsUsers();

                document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
                document.write('<button id=\"su\" style=\"position: absolute; bottom:850px;  left:1800px\" onclick=\"checkStatus()\">Online Users</button>');
                document.write('<div id=\"onlineUsers\" style=\"position: absolute; bottom:900px;width:300px; left:1600px\">Online Users</div>');
                document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showAllUsers()\">ShowUsers</button>');
                document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:1500px\" id=\"PostDescription\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
                document.write('<input id=\"cp\" type=\"submit\" style=\"position: absolute; bottom:560px; left:1800px\" value="CreatePost" onclick=\"createPost()\">');
                document.write('<input  style=\"position: absolute; bottom:560px; left:1500px\" type=\"file\" id=\"myFile\" name=\"filename\" onchange=\"readURL(this);\" >\n');
                document.write('<button id=\"si"\ style=\"position: absolute; bottom:500px; left:1800px\" onclick=\"ShowInfo()\">Show My Profile</button>');
                document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile()\">Search</button>');
                document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
                document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>')
                document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" style=\"position: fixed; bottom:430px; left:1700px\" oninput=\"autoComplete()\" name=\"user\">\n');
                document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
                document.write('</select>');
                camefromsignin = true;
            } else if (req.response.state == "User") {
                document.write('<body style=\'margin: 0\'>');
                document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
                        background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
                searchUserProfile();
                document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
                document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showAllUsers()\">ShowUsers</button>');
                document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:1500px\" id=\"PostDescription\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
                document.write('<input id=\"cp\" type=\"submit\" style=\"position: absolute; bottom:560px; left:1800px\" value="CreatePost" onclick=\"createPost()\">');
                document.write('<input  style=\"position: absolute; bottom:560px; left:1500px\" type=\"file\" id=\"myFile\" name=\"filename\" onchange=\"readURL(this);\" >\n');
                document.write('<button id=\"si"\ style=\"position: absolute; bottom:500px; left:1800px\" onclick=\"ShowInfo()\">Show My Profile</button>');
                document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile();\">Search</button>');
                document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
                document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>')
                document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" style=\"position: fixed; bottom:430px; left:1700px\" oninput=\"autoComplete()\" name=\"user\">\n');
                document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
                document.write('</select>');
            }
        }
    };
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.addEventListener(
                "load",
                function () {

                    var src = reader.result;
                    console.log(src);
                    localStorage.setItem("image", src);
                },
                false
                );
        reader.readAsDataURL(input.files[0]);
    }
}
function createPost() {
    var req = new XMLHttpRequest();
    getLocation();
    setTimeout(function () {
        req.responseType = 'text';
        req.open('POST', "PostManagment", true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (document.getElementById("myFile").files.length === 0)
            req.send('code=' + "Create" + '&PostDes=' + document.getElementById("PostDescription").value + '&lon=' + lon + '&lat=' + lat);
        else
            req.send('code=' + "Create" + '&PostDes=' + document.getElementById("PostDescription").value + '&lon=' + lon + '&lat=' + lat + '&file=' + encodeURIComponent(localStorage.getItem("image")));
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                document.getElementById("PostDescription").value = " ";
                document.getElementById("myFile").value = "";
            }
        };
    }, 600);
}

function showPostsUsers() {



    for (var i = 0; i < 10; i++)
    {
        if (document.getElementById("sec" + i) != null)
        {
            var elem = document.getElementById("sec" + i);
            elem.remove(elem);
        }
    }
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "PostManagment", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('code=' + "Show");
    var bot = 830;
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            console.log(req.response);
            //Removing old elements
            for (i = 0; i < 10; i++) {
                var elem = document.getElementById("div" + i);
                if (elem != null)
                    elem.parentNode.removeChild(elem);
            }
            var f = document.getElementById("divIN");
            if (f != null)
                f.remove(f);
            var f2 = document.getElementById("sp");
            if (f2 != null)
                f2.remove(f2);
            var f3 = document.getElementById("du");
            if (f3 != null)
                f3.remove(f3);
            if (document.getElementById("si") == null)
                document.write('<button id=\"si"\ style=\"position: absolute; bottom:528px; left:1800px\" onclick=\"ShowInfo()\">Show My Profile</button>');
            //End of the removal
            for (i = 0; i < 5; i++) {
                if (req.response[i] != null) {



                    document.write('<div style=\"position: absolute; width:500px; border: 2px solid powderblue; bottom:' + bot + 'px; font-size: 15px;background-color:white\" id=\"div' + i + '\"></div>\n');
                    document.getElementById("div" + i).innerHTML += "UserName: " + req.response[i]['userName'] + "<br>" + "Description: " + req.response[i]['description'] + " <tr><br>";
                    if (req.response[i]['imageURL'] != null && req.response[i]['imageURL'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = req.response[i]['imageURL'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("div" + i).appendChild(img);
                        detectIfPerson(img.src,'image_url');
                        
                    }
                    if (req.response[i]['imageBase64'] != null && req.response[i]['imageBase64'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = req.response[i]['imageBase64'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("div" + i).appendChild(img);
                        detectIfPerson(img.src,'image_base64');
                    }
                    document.getElementById("div" + i).innerHTML += "<br>" + "Created At: " + req.response[i]['createdAt'] + "<br>" + "<br>";
                    var button = document.createElement("input");
                    button.type = "button";
                    button.id = "bt" + i;
                    button.value = "Show On Map";
                    button.style.float = "right";
                    
                     var buttonC = document.createElement("input");
                    buttonC.type = "button";
                    buttonC.id = "btC" + i;
                    buttonC.value = "Reply";
                    buttonC.style.float = "bottom-left";
                    
                    button.addEventListener("click", function () {
                        if (document.getElementById("map") != null) {
                            var f = document.getElementById("map");
                            f.remove(f);
                        }

                        document.getElementById('bt0').onclick = function () {
                            lat = req.response[0]["latitude"];
                            lon = req.response[0]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt1').onclick = function () {
                            lat = req.response[1]["latitude"];
                            lon = req.response[1]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt2').onclick = function () {
                            lat = req.response[2]["latitude"];
                            lon = req.response[2]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt3').onclick = function () {
                            lat = req.response[3]["latitude"];
                            lon = req.response[3]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt4').onclick = function () {
                            lat = req.response[4]["latitude"];
                            lon = req.response[4]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        OpenMap();
                    });
                    //Reply Buttons
                     buttonC.addEventListener("click", function () {
                        
                           
                    
                        document.getElementById('btC0').onclick = function () {
                            var id = req.response[0]["postID"];
                            showCommentPage(id);
                        };
                        document.getElementById('btC1').onclick = function () {
                            
                           var id = req.response[1]["postID"];
                            showCommentPage(id);
                        };
                        document.getElementById('btC2').onclick = function () {
                           var id = req.response[2]["postID"];
                            showCommentPage(id);
                        };
                        document.getElementById('btC3').onclick = function () {
                           var id = req.response[3]["postID"];
                            showCommentPage(id);
                        };
                        document.getElementById('btC4').onclick = function () {
                           var id = req.response[4]["postID"];
                            showCommentPage(id);
                        };
                    });
                    document.write('<div id=\"map\" style=\"position:absolute; height: 200px; left: 1200px; bottom:110px;  width: 250px\" class=\"map\"></div>');
                    document.getElementById("div" + i).appendChild(button);
                    document.getElementById("div" + i).appendChild(buttonC);
                    bot = bot - 180;
                }
            }
            var bot2 = 830;
            for (i = 5; i < 10; i++) {
                if (req.response[i] != null) {



                    document.write('<div style=\"position: absolute; width:500px; border:2px solid powderblue; left:630px; bottom:' + bot2 + 'px; font-size: 15px;background-color:white\" id=\"div' + i + '\"></div>\n');
                    document.getElementById("div" + i).innerHTML += "UserName: " + req.response[i]['userName'] + "<br>" + "Description: " + req.response[i]['description'] + " <tr><br>";
                    if (req.response[i]['imageURL'] != null && req.response[i]['imageURL'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = req.response[i]['imageURL'];
                        img.style.width = "50";
                        img.style.height = "50";
                        detectIfPerson(img.src,'image_url');
                        document.getElementById("div" + i).appendChild(img);
                    }
                    if (req.response[i]['imageBase64'] != null && req.response[i]['imageBase64'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = req.response[i]['imageBase64'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("div" + i).appendChild(img);
                         detectIfPerson(img.src,'image_base64');
                    }
                    document.getElementById("div" + i).innerHTML += "<br>" + "Created At: " + req.response[i]['createdAt'] + "<br>" + "<br>";
                    var button = document.createElement("input");
                    button.type = "button";
                    button.id = "bt" + i;
                    button.value = "Show On Map";
                    button.style.float = "right";
                    button.addEventListener("click", function () {
                        if (document.getElementById("map") != null) {
                            var f = document.getElementById("map");
                            f.remove(f);
                        }

                        document.getElementById('bt5').onclick = function () {
                            lat = req.response[5]["latitude"];
                            lon = req.response[5]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt6').onclick = function () {
                            lat = req.response[6]["latitude"];
                            lon = req.response[6]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt7').onclick = function () {
                            lat = req.response[7]["latitude"];
                            lon = req.response[7]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt8').onclick = function () {
                            lat = req.response[8]["latitude"];
                            lon = req.response[8]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        document.getElementById('bt9').onclick = function () {
                            lat = req.response[9]["latitude"];
                            lon = req.response[9]["longitude"];
                            console.log(lon);
                            console.log(lat);
                        };
                        OpenMap();
                    });
                    document.write('<div id=\"map\" style=\"position:absolute; height: 200px; left:1200px;  bottom:110px;  width: 250px\" class=\"map\"></div>');
                    document.getElementById("div" + i).append(button);
                    bot2 = bot2 - 150;
                }
            }
        }
    };
    var req2 = new XMLHttpRequest();
    req2.responseType = 'json';
    req2.open('POST', "StateOfPage", true);
    req2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req2.send('state=' + "Posts");
}




function SignOut() {
    var doc = document.getElementById("divIN");
    if (doc != null)
        doc.remove(doc);
    usernameForUpdate = '';
    var req = new XMLHttpRequest();
    req.responseType = 'text';
    req.open('POST', "SessionServlet", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('code=' + "1");
}

function SignInPageForPosts() {
    var f = document.getElementById("signupbtn");
    if (f != null)
        f.remove(f);
    var f2 = document.getElementById("questionForSignup");
    if (f2 != null)
        f2.remove(f2);
    var req = new XMLHttpRequest();
    var un = document.getElementById("username").value;
    usernameForUpdate = un;
    var pw = document.getElementById("pwd").value;
    localStorage.setItem("userName", un);
    req.responseType = 'json';
    req.open('POST', "SignInCheck", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('username=' + usernameForUpdate + '&password=' + pw);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.response == "Wrong Password") {
                document.getElementById('displayWrongPassword').innerHTML = 'Wrong Password';
            } else {
                var f = document.getElementById("signin");
                f.remove(f);
                var f2 = document.getElementById("divimg2");
                f2.remove(f2);
                var f3 = document.getElementById("formin");
                f3.remove(f3);
                if (camefromsignin == true) {
                    var a = document.getElementById("signin");
                    a.remove(a);
                    var a2 = document.getElementById("divimg");
                    a2.remove(a2);
                    camefromsignin = false;
                }
                // ShowPosts section!!
                document.write('<body style=\'margin: 0\'>');
                document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
                        background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
                showPostsUsers();
                // ShowPosts section!!
                document.write('<button id=\"su\" style=\"position: absolute; bottom:850px;  left:1800px\" onclick=\"checkStatus()\">Online Users</button>');
                document.write('<div id=\"onlineUsers\" style=\"position: absolute; bottom:900px;width:300px; left:1600px\">Online Users</div>');
                document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
                document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showAllUsers()\">ShowUsers</button>');
                document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:1500px\" id=\"PostDescription\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
                document.write('<input id=\"cp\" type=\"submit\" style=\"position: absolute; bottom:560px; left:1800px\" value="CreatePost" onclick=\"createPost()\">');
                document.write('<input  style=\"position: absolute; bottom:560px; left:1500px\" type=\"file\" id=\"myFile\" name=\"filename\">\n');
                document.write('<button id=\"si"\ style=\"position: absolute; bottom:528px; left:1800px\" onclick=\"ShowInfo()\">Show My Profile</button>');
                document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile()\">Search</button>');
                document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
                document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>');
                document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" oninput=\"autoComplete()\" style=\"position: fixed; bottom:430px; left:1700px\" >\n');
                document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
                document.write('</select>');
                camefromsignin = true;
                var req2 = new XMLHttpRequest();
                req2.responseType = 'json';
                req2.open('POST', "StateOfPage", true);
                req2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                req2.send('state=' + "Posts");
            }
        }
    };
}

//Getting Position
var lon = 0;
var lat = 0;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}


function OpenMap() {

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })

        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 9
        })
    });
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
                })
            ]
        })
    });
    map.getView().animate({
        zoom: map.getView().getZoom() + 11,
        duration: 500
    });
    map.addLayer(layer);
}

function showPosition(position) {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
}
//End of position

function setUsernameCookie() {
    var un = document.getElementById('user').value;
    var cookies = new XMLHttpRequest();
    cookies.responseType = 'json';
    cookies.open('POST', "Cookies", true);
    cookies.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    cookies.send('username=' + un);
}


function autoComplete() {
    var users = JSON.parse(localStorage.getItem("users"));
    var users_found = [];
    var string = document.getElementById("user").value;
    for (var i = 0; i < users.length; i++)
    {
        if (string.substring(0).toUpperCase() === users[i].substring(0, string.length).toUpperCase())
        {
            users_found.push(users[i]);
        }

    }

    for (const val of users_found) {
        sel = document.getElementById('users');
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode(val));
        opt.value = val;
        sel.appendChild(opt);
    }






    var e = document.getElementById("users");
    e.addEventListener("click", function (temp) {
        var strUser = e.options[e.selectedIndex].text;
        document.getElementById("user").value = strUser;
    });
    users_found = [];
    var select = document.getElementById("users");
    removeDuplicateOptions(select);
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        if (select.options[i].value.substring(0, string.length).toUpperCase() !== string.toUpperCase())
            select.options[i] = null;
    }


//    var xhttp = new XMLHttpRequest();
//    xhttp.responseType = 'json';
//    xhttp.open('POST', "PostManagment", true);
//    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//    xhttp.send('code=' + "GetUserNames");
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4) {
//            console.log(xhttp.response);
//            users = xhttp.response;
//            localStorage.setItem("users", JSON.stringify(users));
//        }

//}
}
function getPostPosition(latitude, longitude) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            return (response['address']['country']);
        }

    }

    var url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latitude + '&lon=' + longitude;
    xhttp.open('GET', url, true);
    xhttp.send();
}
function removeDuplicateOptions(s, comparitor) {
    if (s.options == null)
        return false;
    var c, i, o = s.options, sorter = {};
    if (!comparitor || typeof comparitor !== 'function') {
        comparitor = function (o) {
            return o.value;
        }; //by default we comare option values.
    }
    for (i = 0; i < o.length; i++) {
        c = comparitor(o[i]);
        if (sorter[c]) {
            s.removeChild(o[i]);
            i--;
        } else {
            sorter[c] = true;
        }
    }
    return true;
}

function searchUserProfile()
{
    var a = document.getElementById("su");
    if (a != null)
        a.remove(a);
    var a2 = document.getElementById("divIN");
    if (a2 != null)
        a2.remove(a2);
    var a3 = document.getElementById("sp");
    if (a3 != null)
        a3.remove(a3);
    var a4 = document.getElementById("myFile");
    if (a4 != null)
        a4.remove(a4);
    var a5 = document.getElementById("PostDescription");
    if (a5 != null)
        a5.remove(a5);
    var a6 = document.getElementById("so");
    if (a6 != null)
        a6.remove(a6);
    var a7 = document.getElementById("cp");
    if (a7 != null)
        a7.remove(a7);
    var a8 = document.getElementById("divimg");
    if (a8 != null)
        a8.remove(a8);
    var a9 = document.getElementById("showprofile");
    if (a9 != null)
        a9.remove(a9);
    var a10 = document.getElementById("searchspan");
    if (a10 != null)
        a10.remove(a10);
    var a11 = document.getElementById("textspan");
    if (a11 != null)
        a11.remove(a11);
    var a12 = document.getElementById("du");
    if (a12 != null)
        a12.remove(a12);
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json';
    xhttp.open('POST', "PostManagment", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send('code=' + "ShowUser");
    var bot = 830;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            //console.log(xhttp.response);
            document.write('<body style=\'margin: 0\'>');
            document.write('<div id="\divimg\" style=\"position: absolute; height:937px; width: 100%; \n\
                        background-image: url(\'https:www.itl.cat/pngfile/big/157-1572191_hd-wallpapers-for-website-background-cool-background-image.jpg\'); background-attachment: fixed; background-repeat: repeat;\"></div>');
            document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
            document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showPostsUsers()\">Main Screen</button>');
            document.write('<div style=\"position: absolute; width:500px; border: 2px solid powderblue; bottom:' + 900 + 'px; font-size: 15px;background-color:white\" \">' + "Profile: " + xhttp.response[0]['userName'] + '</div>\n');
            for (i = 0; i < 7; i++) {
                if (xhttp.response[i] != null) {

                    document.write('<div style=\"position: absolute; width:500px; border: 2px solid powderblue; bottom:' + bot + 'px; font-size: 15px;background-color:white\" id=\"sec' + i + '\"></div>\n');
                    document.getElementById("sec" + i).innerHTML += "Description: " + xhttp.response[i]['description'] + " <tr><br>";
                    if (xhttp.response[i]['imageURL'] != null && xhttp.response[i]['imageURL'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = xhttp.response[i]['imageURL'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("sec" + i).appendChild(img);
                    }
                    if (xhttp.response[i]['imageBase64'] != null && xhttp.response[i]['imageBase64'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = xhttp.response[i]['imageBase64'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("sec" + i).appendChild(img);
                    }
                    document.getElementById("sec" + i).innerHTML += "<br>" + "Created At: " + xhttp.response[i]['createdAt'] + "<br>" + "<br>";
                    bot = bot - 120;
                }
            }
            var bot2 = 750;
            for (i = 7; i < 10; i++) {
                if (xhttp.response[i] != null) {

                    document.write('<div style=\"position: absolute; width:600px; left:630px; bottom:' + bot2 + 'px; font-size: 15px;background-color:white\" id=\"sec' + i + '\"></div>\n');
                    document.getElementById("sec" + i).innerHTML += "Description: " + xhttp.response[i]['description'] + " <tr><br>";
                    if (xhttp.response[i]['imageURL'] != null && xhttp.response[i]['imageURL'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = xhttp.response[i]['imageURL'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("sec" + i).appendChild(img);
                    }
                    if (xhttp.response[i]['imageBase64'] != null && xhttp.response[i]['imageBase64'] != "")
                    {
                        var img = document.createElement("img");
                        img.src = xhttp.response[i]['imageBase64'];
                        img.style.width = "50";
                        img.style.height = "50";
                        document.getElementById("sec" + i).appendChild(img);
                    }
                    document.getElementById("sec" + i).innerHTML += "<br>" + "Created At: " + xhttp.response[i]['createdAt'] + "<br>" + "<br>";
                    bot2 = bot2 - 220;
                }
            }

        }

    }
    var req2 = new XMLHttpRequest();
    req2.responseType = 'json';
    req2.open('POST', "StateOfPage", true);
    req2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req2.send('state=' + "User");
}
function goToMainScreen() {
    document.write('<button id=\"showprofile\" style=\"position: absolute; bottom:400px; left:1800px\" onclick=\"setUsernameCookie(); searchUserProfile()\">Search</button>');
    document.write('<label style=\"position: fixed; bottom:1090px; left:1400px\" for=\"user\">Username:</label>\n');
    document.write('<span id=\"searchspan\" style=\"position: fixed; font-size:30px; bottom:460px; left:1600px\">Search User Profile</span>')
    document.write('<span id=\"textspan\" style=\"position: fixed; font-size:20px; bottom:430px; left:1600px\">Username:</span><input type=\"text\" id=\"user\" style=\"position: fixed; bottom:430px; left:1700px\" oninput=\"autoComplete()\" name=\"user\">\n');
    document.write('<select name=\"users\" id=\"users\" style=\"position: fixed; font-size:20px; bottom:400px; left:1600px ; width:200px\" >\n');
    document.write('</select>');
    showPostsUsers();
}

function deleteUser() {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', "DeleteUser", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('state=' + "User");
    req.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert(req.response);

            SignOut();
            SignInPage();
        }
    }
}
function checkStatus() {
    var req = new XMLHttpRequest();
    document.getElementById("onlineUsers").innerHTML = "Online Users";
    req.responseType = 'json';
    req.open('POST', "OnlineUsers", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('state=' + "User");
    req.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(req.response);
            if (req.response != null) {

                for (var i = 0; i < req.response['length']; i++)
                {
                    if (i == 0)
                        document.getElementById("onlineUsers").innerHTML += "<br>" + req.response[i]['userName'] + "<br>";
                    else
                        document.getElementById("onlineUsers").innerHTML += req.response[i]['userName'] + "<br>";
                }
            }

        }
    }
}

function findUserNameFromImage(img)
{
    var faceAPI = {

        app: 'hy359',
        apiKey: 'l2jNgKbk1HXSR4vMzNygHXx2g8c_xT9c',
        apiSecret: '2T6XdZt4EYw-I7OhmZ6g1wtECl81e_Ip',
        search: 'https://api-us.faceplusplus.com/facepp/v3/search'
    }
    var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var resp = JSON.parse(this.responseText);
            console.log(resp['results'][0]['user_id']);
        }
        
        }
    var data = new FormData();
    data.append('api_key', faceAPI.apiKey);
        data.append('api_secret', faceAPI.apiSecret);
        data.append('face_token',img);
        data.append('outer_id','hy359');

    xhr.open("POST", faceAPI.search, true);
    xhr.send(data);
}
function detectIfPerson(img,type) {
    var faceAPI = {

        app: 'hy359',
        apiKey: '',
        apiSecret: '',
        detect: 'https://api-us.faceplusplus.com/facepp/v3/detect'  // POST
    }
    var xhr = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
           
            var resp = JSON.parse(this.responseText);
     
            if(typeof resp['faces'][0]!= 'undefined')
            {
                console.log("HEY");
                 var face_token = resp['faces'][0]['face_token'];
                   console.log(face_token);
                findUserNameFromImage(face_token);
            }
            
        }
        
        }
    var data = new FormData();
    data.append('api_key', faceAPI.apiKey);
    data.append('api_secret', faceAPI.apiSecret);
    data.append(type, img);
    data.append('return_attributes', 'gender,age,ethnicity,beauty,emotion,mouthstatus,headpose,smiling');
    
    xhr.open("POST", faceAPI.detect, true);
    xhr.send(data);
    
}
function showCommentPage(id) {
    var a3 = document.getElementById("sp");
    if (a3 != null)
        a3.remove(a3);
    var rem1 = document.getElementById("showprofile");
    if (rem1 != null)
        rem1.remove(rem1);
    var rem2 = document.getElementById("textspan");
    if (rem2 != null)
        rem2.remove(rem2);
    var rem3 = document.getElementById("searchspan");
    if (rem3 != null)
        rem3.remove(rem3);
    var rem4 = document.getElementById("user");
    if (rem4 != null)
        rem4.remove(rem4);
    var rem5 = document.getElementById("users");
    if (rem5 != null)
        rem5.remove(rem5);
    var rem6 = document.getElementById("su");
    if (rem6 != null)
        rem6.parentNode.removeChild(rem6);
    var rem7 = document.getElementById("map");
    if (rem7 != null)
        rem7.remove(rem7);
    for (i = 0; i < 10; i++) {
                        var elem = document.getElementById("div" + i);
                        if (elem != null)
                            elem.parentNode.removeChild(elem);
                    }
    document.write('<body style=\'margin: 0\'>');
  
    document.write('<button id=\"so\" style=\"position: absolute; left:1800px\" onclick=\"SignInPage(); SignOut()\">SignOut</button>');
    document.write('<button id=\"su\" style=\"position: absolute; bottom:890px; left:1800px\" onclick=\"showPostsUsers()\">Main Screen</button>');
    document.write('<textarea style=\"position: absolute; width:400px; bottom:600px; left:100px\" id=\"com\" name=\"message\" rows=\"10\" cols=\"30\"></textarea>');
     //Create Buttons
    document.write('<div style=\"position: absolute; left: 100px; bottom: 560px\" id=\"divCC\"></div>');
                    
                    var button = document.createElement("input");
                    button.type = "button";
                    button.id = "createComment";
                    button.value = "Post reply";
  
                    button.addEventListener("click", function (){            
                            createComment(id);
                    });
                    document.getElementById("divCC").append(button);
}
function createComment(id) {
    var comment = document.getElementById("com").value;
    var reqU = new XMLHttpRequest();
    reqU.responseType = 'text';
    reqU.open('POST', "Cookies", true);
    reqU.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    reqU.send('code=' + "getUser");
    reqU.onreadystatechange = function () {
        if (reqU.readyState == 4) {
            var un = reqU.response;
            var req = new XMLHttpRequest();
            req.responseType = 'json';
            req.open('POST', "PostManagment", true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            req.send('code=' + "createComment" + '&description=' + comment + '&username=' + un + '&postID=' + id);
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    console.log(req.response);
                }
            };
        }
    };
}
function deleteComment() {

}

function updateComment() {

}
