import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment){
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  getAll(){
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(comment: Comment){
    this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string){
    this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }

  getCommentsByIngatlanId(ingatlanId: string){
    return this.afs.collection<Comment>(this.collectionName, ref => ref.where('ingatlanId', '==', ingatlanId).orderBy('date','asc')).valueChanges();
  }
}
