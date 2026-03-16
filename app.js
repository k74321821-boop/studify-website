import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabase = createClient(
"https://ageahamkrkgwrjzcokpv.supabase.co",
"sb_publishable_jy1KPhJzDsgNkodh0fNASQ_ui0qt7i8"
)

// Registrierung
window.register = async function(){
let email=document.getElementById("email").value
let password=document.getElementById("password").value

const { error } = await supabase.auth.signUp({
email: email,
password: password
})

if(error) alert(error.message)
else alert("Account erstellt")
}

// Login
window.login = async function(){
let email=document.getElementById("email").value
let password=document.getElementById("password").value

const { error } = await supabase.auth.signInWithPassword({
email: email,
password: password
})

if(error) alert(error.message)
else alert("Login erfolgreich")
}
