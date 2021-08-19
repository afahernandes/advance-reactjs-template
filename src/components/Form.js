const style = {
  form: {
    margin: "16px 20% 0",
  }, 
  formGroup: {
    marginBotton: "16px",
  },
  formLabel: {
    marginBotton: "8px",
    display:"block", 
  },
  InputLabel: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "blue",
    backroundColor: "white",
    border: "1px solid #ced4da",
    borderRadius: "5px",
    outline:0,  
  },
};
// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={style.form}>
        <div style={style.formGroup}>
          <h3 style={{ fontStyle: "bold", color: "red" }}>Login</h3>

          <label htmlFor="username" style={style.formLabel}>Username</label>
          <input id="username" style={style.InputLabel} placeholder="Input Username" />
        </div>
      </form>
    </div>
  );
}

export default Form;
