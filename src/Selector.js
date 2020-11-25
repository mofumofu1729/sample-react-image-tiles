import Button from '@material-ui/core/Button';

function Selector() {
  return (
    <div className="Selector">
      <div id="label-area">
        <Button variant="contained" color="primary" id="btn-class-1">1</Button>
        <Button variant="contained" color="secondary" id="btn-class-2">2</Button>
        <Button variant="contained" color="error" id="btn-class-3">3</Button>
        <Button variant="contained" id="btn-class-0">0</Button>
      </div>

      <form>
        <Button variant="contained" color="warning" id="send-labels">送信</Button>
        <Button variant="contained" color="warning" id="decide-labels">確定</Button>
      </form>
    </div>
  );
}

export default Selector;
