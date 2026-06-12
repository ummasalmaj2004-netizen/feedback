const supabaseUrl =
"https://azqkjbfctblxzvjeroam.supabase.co";

const supabaseKey =
"sb_publishable_y5XJvIjhtTMqBPkqGbvPYA_w-nmk1zG";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

async function submitForm() {

    const name =
        document.getElementById("name").value.trim();

    const student_id =
        document.getElementById("student_id").value.trim();

    const department =
        document.getElementById("department").value;

    const comment =
        document.getElementById("comment").value.trim();

    if (!name || !student_id || !department || !comment) {

        document.getElementById("message").innerHTML =
            "❌ Please fill in all fields.";

        return;
    }

    const { error } = await supabaseClient
        .from("feedback")
        .insert([
            {
                name: name,
                student_id: student_id,
                department: department,
                comment: comment
            }
        ]);

    if (error) {

        console.error(error);

        document.getElementById("message").innerHTML =
            "❌ " + error.message;

    } else {

        document.getElementById("message").innerHTML =
            "✅ Feedback submitted successfully!";

        document.getElementById("name").value = "";
        document.getElementById("student_id").value = "";
        document.getElementById("department").value = "";
        document.getElementById("comment").value = "";
    }
}
