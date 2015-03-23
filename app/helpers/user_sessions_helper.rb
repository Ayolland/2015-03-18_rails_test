module UserSessionsHelper
  
  def admin_logged_in?
    return false if session[:user_id] == nil
    User.find(session[:user_id]).admin
  end
  
end
