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
    if @user.save
      render "view"
    else
      render "new"
    end
  end
  
  def show
    @user = User.find(params[:id])
    render "view"
  end
  
  def edit
    @user = User.find(params[:id])
    render "edit"
  end
  
  def update
    binding.pry
    @user = User.find(params[:user][:id])
    @user.assign_attributes(params[:user])
    if @user.save
      render "view"
    else
      render "edit"
    end
  end
  
  def destroy
    @user = User.find(params[:user][:id])
    @user.destroy
    redirect to "/"
  end
  
end