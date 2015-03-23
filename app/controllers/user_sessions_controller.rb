class UserSessionsController < ApplicationController
  def new
    render 'new'
  end

  def create
    user = User.where(email: params[:email]).first
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id 
      #WHY don't I need to define session? Did I already?
      redirect_to "/"
    else
      redirect_to "/login"
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to "/"
  end
end
