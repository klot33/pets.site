import React from 'react';
import '../pages/css/my.css';

function ForgotPassword() {
  return (
    <div>
    <a type="button" class="" data-bs-toggle="modal" data-bs-target="#ForgotPasswordModal">
  Забыли пароль?
</a>
    <div>
      <div className="modal fade" id="forgotPasswordModal" tabIndex={-1} aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="forgotPasswordModalLabel">Восстановление пароля</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Введите ваш Email</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="example@example.com" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Восстановить пароль</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
