class LikesController < ApplicationController
  
  def create
    @like = Like.new(params[:like])
    if !Like.exists?(user_id: params[:like][:user_id], duck_id: params[:like][:duck_id])
      if @like.save
        redirect_to "/ducks/#{params[:like][:duck_id]}"
      else
        redirect_to "/"
      end
    else
      redirect_to "/ducks"
    end
  end
  
  def destroy
    @like = Like.where(user_id: params[:like][:user_id], duck_id: params[:like][:duck_id]).first
    @like.destroy if @like
    redirect_to "/ducks"
  end
  
end