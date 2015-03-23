class UsersController < ApplicationController
  
  def index
    @users = User.all
    render "index"
  end
  
  def new
    @user = User.new
    render "new"
  end
  
  def create
    @user = User.new(params[:user])
    binding.pry
    if @user.save
      render "view"
    else
      binding.pry
      render "new"
    end
  end
  
  def edit
    @user = User.find(params[:id])
    render "edit"
  end
  
  def update
    @user = user.find(params[:user][:id])
    @user.assign_attributes(params[:user])
    if @user.save
      render "view"
    else
      render "edit"
    end
  end
  
  def destroy
    @user = user.find(params[:user][:id])
    @user.destroy
    redirect_to "/"
  end
  
end